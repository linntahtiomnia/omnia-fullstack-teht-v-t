/*
Tässä tiedostossa määritellään apufunktioita, joita käytetään note_api.test.js-tiedostossa.
Näitä funktioita käytetään testien suorittamisen yhteydessä tietokannan tilan tarkistamiseen
ja muistiinpanojen luomiseen testitilanteissa.
*/
const Note = require('../models/note')

// Kovakoodattu testidata
const initialNotes = [
  {
    content: 'HTML is easy',
    important: false,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  },
]

// Funktio, joka luo tietokantaan muistiinpanon, poistaa sen ja palauttaa sen id:n.
// Tätä käytetään testaamaan, miten palvelin käyttäytyy saadessaan parametrina id:n, jota ei löydy tietokannasta.
const nonExistingId = async () => {
  const note = await Note.create({ content: 'willremovethissoon' })
  const id = note._id.toString()
  await note.destroy()

  return id
}

// Funktio, joka hakee tietokannasta kaikki muistiinpanot ja palauttaa ne JSON-muodossa.
const notesInDb = async () => {
  const notes = await Note.findAll()
  return notes.map((note) => note.toJSON())
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
}