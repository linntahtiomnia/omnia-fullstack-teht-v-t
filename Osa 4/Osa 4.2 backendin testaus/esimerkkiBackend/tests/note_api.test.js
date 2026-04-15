/*
Tämä tiedosto sisältää testit muistiinpanojen REST API:lle.
Testit on kirjoitettu Node.js:n omalla testauskirjastolla, ja käyttäen supertest-kirjastoa HTTP-pyyntöjen tekemiseen.
Huomaa, miten testit käyttävät async/await-rakennetta promisejen käsittelyyn.
*/
const assert = require('node:assert')
const { test, after, before, beforeEach } = require('node:test')
const supertest = require('supertest')
const app = require('../app')
const { sequelize } = require('../utils/db')
const Note = require('../models/note')
const helper = require('./test_helper')

const api = supertest(app)

// Ennen testien suorittamista tyhjennetään tietokanta ja lisätään sinne tarvittavat taulut sync-komennolla.
before(async () => {
  await sequelize.drop()
  await sequelize.sync({ force: true })
})

// Ennen jokaista testiä poistetaan kaikki rivit note-taulusta ja lisätään sinne testidataa.
beforeEach(async () => {
  await Note.destroy({ where: {} }) // Tyhjennetään taulukko ennen jokaista testiä
  await Note.create(helper.initialNotes[0]) // Testidata löytyy test_helper.js-tiedostosta
  await Note.create(helper.initialNotes[1])
})

// Testataan, että muistiinpanot palautuvat JSON-muodossa, kun tehdään HTTP GET-pyyntö /api/notes-polkuun.
test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// Testataan, että kaikki muistiinpanot palautuvat, kun tehdään HTTP GET-pyyntö /api/notes-polkuun.
// Tarkistetaan, että muistiinpanoja palautuu oikea määrä.
test('all notes are returned', async () => {
  const response = await api.get('/api/notes')

  assert.strictEqual(response.body.length, helper.initialNotes.length)
})

// Testataan, että tietty muistiinpano löytyy palautetuista muistiinpanoista.
test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map((e) => e.content)
  assert(contents.includes('HTML is easy'))
})

// Testataan, että uusi muistiinpano voidaan lisätä onnistuneesti HTTP POST-pyynnöllä /api/notes-polkuun.
test('a valid note can be added ', async () => {
  const newNote = {
    content: 'async/await simplifies making async calls',
    important: true,
  }

  await api
    .post('/api/notes')
    .send(newNote)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const notesAtEnd = await helper.notesInDb()
  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length + 1) // Tarkistetaan, että muistiinpanojen määrä on kasvanut yhdellä

  const contents = notesAtEnd.map((n) => n.content)
  assert(contents.includes('async/await simplifies making async calls')) // Tarkistetaan, että uusi muistiinpano löytyy tietokannasta
})

// Testataan, että muistiinpano, jolla ei ole content-kenttää, ei lisätä tietokantaan.
test('note without content is not added', async () => {
  const newNote = {
    important: true,
  }

  await api.post('/api/notes').send(newNote).expect(400) // Tarkistetaan, että palvelin palauttaa 400 Bad Request -virheen

  const notesAtEnd = await helper.notesInDb()

  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length) // Tarkistetaan, että muistiinpanojen määrä ei ole kasvanut
})

// Testataan, että tietty muistiinpano voidaan hakea onnistuneesti HTTP GET-pyynnöllä /api/notes/:id-polkuun.
test('a specific note can be viewed', async () => {
  const notesAtStart = await helper.notesInDb()
  const noteToView = notesAtStart[0]

  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  assert.deepStrictEqual(resultNote.body, noteToView) // Kun vertaillaan olioita, käytetään deepStrictEqual-metodia, joka tarkistaa, että olioiden sisältö on sama, eikä vain viittaukset olioihin
})

// Testataan, että muistiinpano, jolla on olemassa oleva id, voidaan poistaa onnistuneesti HTTP DELETE-pyynnöllä /api/notes/:id-polkuun.
test('a note can be deleted', async () => {
  const notesAtStart = await helper.notesInDb()
  const noteToDelete = notesAtStart[0]

  await api.delete(`/api/notes/${noteToDelete.id}`).expect(204)

  const notesAtEnd = await helper.notesInDb()

  const contents = notesAtEnd.map((n) => n.content)
  assert(!contents.includes(noteToDelete.content)) // Tarkistetaan, että poistetun muistiinpanon sisältö ei enää löydy tietokannasta

  assert.strictEqual(notesAtEnd.length, helper.initialNotes.length - 1) // Tarkistetaan, että muistiinpanojen määrä on vähentynyt yhdellä
})

// Lopuksi suljetaan tietokantayhteys, jotta testit eivät jää roikkumaan.
after(async () => {
  await sequelize.close()
})