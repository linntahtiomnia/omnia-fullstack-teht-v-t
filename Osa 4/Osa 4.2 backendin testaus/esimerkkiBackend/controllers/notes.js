const notesRouter = require('express').Router()
const Note = require('../models/index')

notesRouter.get('/', (request, response) => {
  Note.findAll().then((notes) => {
    response.json(notes)
  })
})

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

module.exports = notesRouter