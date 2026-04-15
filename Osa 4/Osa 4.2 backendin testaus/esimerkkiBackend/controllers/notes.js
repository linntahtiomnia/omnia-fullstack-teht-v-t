const notesRouter = require('express').Router()
const Note = require('../models/index')

/*
// Tämä route käyttää then-lohkoa promisen kanssa
notesRouter.get('/', (request, response) => {
  Note.findAll().then((notes) => {
    response.json(notes)
  })
})
*/

// Tämä route tekee täysin saman kuin yllä oleva kommentoitu route, mutta käyttää async/await rakennetta.
notesRouter.get('/', async (request, response) => {
  // await -komento kertoo tietokoneelle, että sitä seuraava funktio palauttaa promisen.
  // Ohjelman suoritus jää odottamaan, että promise on valmis ja palauttaa funktion palautusarvon.
  // Tässä tapauksessa await Note.findAll() palauttaa kaikki tietokannasta löytyvät muistiinpanot.
  const notes = await Note.findAll()
  response.json(notes)
})

/*
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
*/

notesRouter.get('/:id', async (request, response, next) => {
  try {
    const note = await Note.findByPk(request.params.id)
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  } catch (error) {
    next(error)
  }
}
)


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

module.exports = notesRouter