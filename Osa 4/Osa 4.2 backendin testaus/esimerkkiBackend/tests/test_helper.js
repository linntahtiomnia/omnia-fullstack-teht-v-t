const Note = require('../models/note')

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

const nonExistingId = async () => {
  const note = await Note.create({ content: 'willremovethissoon' })
  const id = note._id.toString()
  await note.destroy()

  return id
}

const notesInDb = async () => {
  const notes = await Note.findAll()
  return notes.map((note) => note.toJSON())
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
}