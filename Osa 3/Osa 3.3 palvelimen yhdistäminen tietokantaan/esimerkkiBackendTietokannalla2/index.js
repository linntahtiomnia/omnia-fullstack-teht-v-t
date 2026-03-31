// Haetaan dotenv-kirjastolla .env-tiedoston sisältämät ympäristömuuttujat käyttöön.
require('dotenv').config()
// Importataan Note-malli models-kansiosta. Note-malli kuvaa notes-taulukon rakennetta tietokannassa.
// Tietokantaan yhdistämistä ei nyt tarvitse tehdä erikseen tässä tiedostossa.
const { Note } = require('./models/note')
// Importataan itse tehty middlewaret utils-kansiosta.
const { unknownEndpoint, errorHandler } = require('./utils/middleware')
// importataan express-kirjasto require-funktiolla.
const express = require('express')
// Luodaan uusi express-sovellus kutsumalla express-funktiota.
const app = express()

// Middleware, joka mahdollistaa JSON-muotoisten HTTP-pyyntöjen käsittelyn.
// express.json() -middleware muuntaa HTTP-pyynnön body-kentän JSON-muotoon ja asettaa sen request.body -kenttään.
// Tämä mahdollistaa JSON-muotoisen datan lähettämisen HTTP-pyynnön body:ssa.
app.use(express.json())


// Route kaikkien muistiinpanojen hakuun. Route vastaa lähettämällä koko notes-taulukon JSON-muodossa.
// Note.findAll() -metodi hakee kaikki muistiinpanot tietokannasta ja palauttaa ne taulukkomuodossa.
// findAll-metodi tekee tietokantakyselyn: "SELECT "id", "content", "important", "date" FROM "notes" AS "note";"
// findAll-metodi palauttaa promisen, joten meidän pitää käyttää then-lohkoa.
// response.json() -metodi muuntaa JavaScript-olion JSON-muotoon ja lähettää sen vastauksena HTTP-pyyntöön.
app.get('/api/notes', (request, response) => {
  Note.findAll()
    .then(notes => {
      response.json(notes)
    })
})

// route yksittäisen muistiinpanon hakuun. Route hakee muistiinpanon, jonka id vastaa URL:ssa parametrina annettua id:tä.
// URL:ssa parametri määritellään kaksoispisteen avulla.
app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  // Note.findByPk() -metodi hakee muistiinpanon tietokannasta sen primääriavaimen (id) perusteella.
  // findByPk-metodi tekee tietokantakyselyn: "SELECT "id", "content", "important", "date" FROM "notes" AS "note" WHERE "note"."id" = 1 LIMIT 1;"
  Note.findByPk(id)
    .then(note => {
      if (note) {
        // Jos muistiinpano löytyy, sovellus vastaa sen JSON-muodossa.
        response.json(note)
      } else {
        // Jos muistiinpanoa ei löydy, sovellus vastaa statuskoodilla 404 Not Found.
        response.status(404).end()
      }
    })
})

// route HTTP POST -pyynnön käsittelyyn.
app.post('/api/notes', (request, response) => {
  // Pyynnön mukana lähetetty data löytyy request.body -kentästä.
  const body = request.body
  // Luotaan uusi muistiinpano Note-mallin create-metodilla,
  // joka luo uuden rivin notes-taulukkoon tietokannassa.
  // Huom! huomaa, ettei meidän tarvitse enää määritellä id-kenttää,
  // koska se lisätään automaattisesti tietokannassa autoIncrement-ominaisuuden ansiosta.
  // Sen sijaan määrittelemme date-kentän, joka saa arvokseen uuden Date-olion, joka kuvaa nykyhetkeä.
  // Kaikki muut kentät saadaan HTTP-pyynnön mukana lähetetystä datasta.
  Note.create({ ...body, date: new Date() })
    .then(note => {
      // Kun uusi muistiinpano on luotu, sovellus vastaa sen JSON-muodossa.
      response.json(note)
    })

  /*
     // Vaihtoehtoinen tapa luoda uusi muistiinpano:
    Note.build(body)
      .then(note => {
        // Note.build() -metodi luo uuden Note-instanssin, mutta ei tallenna sitä tietokantaan.
        // build-metodi ei tee tietokantakyselyä, vaan luo vain uuden JavaScript-olion, joka edustaa muistiinpanoa.
        // muistiinpanoon pitää manuaalisesti asettaa date-kenttä, koska build-metodi ei tee mitään oletusasetuksia.
        note.date = new Date()
        // dave-metodi tallentaa muistiinpanon ja palauttaa promisen.
        note.save()
          .then(savedNote => {
            response.json(savedNote)
          })
      })
    */
})

// route HTTP DELETE -pyynnön käsittelyyn. Route poistaa muistiinpanon,
// jonka id vastaa URL:ssa parametrina annettua id:tä.
// Jos muistiinpano löytyy, se poistetaan ja vastataan statuskoodilla 204 No Content.
app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  Note.findByPk(id)
    .then(note => {
      if (note) {
        // Jos muistiinpano löytyy, se poistetaan ja vastataan statuskoodilla 204 No Content.
        // Note.destroy() -metodi poistaa muistiinpanon tietokannasta.
        // destroy-metodi palauttaa promisen, joten tarvitsemme uuden then-lohkon.
        note.destroy()
          .then(() => {
            response.status(204).end()
          })
      } else {
        // Jos muistiinpanoa ei löydy, sovellus vastaa statuskoodilla 404 Not Found.
        response.status(404).end()
      }
    })
})

// route HTTP PUT -pyynnön käsittelyyn.
// Route päivittää muistiinpanon, jonka id vastaa URL:ssa parametrina annettua id:tä.
app.put('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const body = request.body
  Note.findByPk(id)
    .then(note => {
      if (note) {
        // Jos muistiinpano löytyy, se päivitetään HTTP-pyynnön mukana lähetetyllä datalla.
        // Note.update() -metodi päivittää muistiinpanon tietokannassa.
        // update-metodi palauttaa promisen, joten tarvitsemme uuden then-lohkon.
        note.update(body)
          .then(updatedNote => {
            // Kun muistiinpano on päivitetty, sovellus vastaa sen JSON-muodossa.
            response.json(updatedNote)
          })
      } else {
        // Jos muistiinpanoa ei löydy, sovellus vastaa statuskoodilla 404 Not Found.
        response.status(404).end()
      }
    })
})


// Otetaan itse tehty middleware käyttöön.
app.use(unknownEndpoint)


// Otetaan itse tehty errorHandler-middleware käyttöön.
// Huomaa, että errorHandler-middleware on määriteltävä viimeiseksi,
// jotta se ehtii käsittelemään kaikki sovelluksessa tapahtuneet virheet.
app.use(errorHandler)


// Sovellus käynnistetään porttiin 3001
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})