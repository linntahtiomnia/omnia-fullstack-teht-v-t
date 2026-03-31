/*
  Tässä tiedostossa määritellään Express-sovellus.
  Sovellus määrittelee, miten HTTP-pyynnöt käsitellään.
  Reittien käsittelijät eli routet määritellään erillisissä moduuleissa, tässä tapauksessa 'notesRouter' moduulissa.
*/
const express = require('express')
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')

// Luodaan Express-sovellus
const app = express()

// Otetaan käyttään JSON-parseri sekä middleware.js-tiedostossa määritelty requestLogger
app.use(express.json())
app.use(middleware.requestLogger)

// Otetaan käyttöön routet, jotka löytyvät controllers/notes.js-tiedostosta.
// Routeille määritellään polku '/api/notes', joten kaikki controllers/notes.js-tiedostossa määriteltyjen
// routejen polut alkavat '/api/notes' -polulla, esimerkiksi '/api/notes/:id'.
app.use('/api/notes', notesRouter)

// Otetaan käyttöön middleware.js-tiedostossa määritellyt unknownEndpoint- ja errorHandler-middlewaret.
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// Sovellus exportataan, jotta sitä voidaan käyttää muissa tiedostoissa, esimerkiksi index.js-tiedostossa.
module.exports = app