/*
  Tämä tiedosto sisältää routet muistiinpanojen käsittelyyn.
  Routet määritellään expressin Router-olion avulla.
  Sovelluksen alussa importataan Router-olio sekä Note-tietokantamalli.
*/
const notesRouter = require('express').Router()
const Note = require('../models/index')

// Huomaa, miten polun paikalla on vain kenoviiva /. Tämä johtuu siitä, että tämän controllerin polku api/notes
// on määritetty app.js-tiedostossa, eikä sitä tarvitse toistaa täällä.
// Tämä route käsittelee siis pyynnöt polkuun api/notes/
notesRouter.get('/', (request, response) => {
  Note.findAll().then((notes) => {
    response.json(notes)
  })
})

// Tämä route vastaavasti käsittelee pyynnöt polkuun api/notes/:id, jossa :id on parametri.
notesRouter.get('/:id', (request, response, next) => {
  Note.findByPk(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

notesRouter.post('/', (request, response, next) => {
  const body = request.body

  Note.create({
    content: body.content,
    important: body.important || false,
  })
    .then((note) => {
      response.json(note)
    })
    .catch((error) => next(error))
})

notesRouter.delete('/:id', (request, response, next) => {
  Note.findByPk(request.params.id)
    .then((note) => {
      if (!note) {
        return response.status(404).end()
      }
      note.destroy()
        .then(() => {
          response.status(204).end()
        })
        .catch((error) => next(error))
    })
    .catch((error) => next(error))
})

notesRouter.put('/:id', (request, response, next) => {
  const { content, important } = request.body

  Note.findByPk(request.params.id)
    .then((note) => {
      if (!note) {
        return response.status(404).end()
      }

      note.content = content
      note.important = important

      note.save().then((updatedNote) => {
        response.json(updatedNote)
      })
    })
    .catch((error) => next(error))
})

// Lopuksi exportataan router, jotta se voidaan ottaa käyttöön app.js-tiedostoon.
module.exports = notesRouter