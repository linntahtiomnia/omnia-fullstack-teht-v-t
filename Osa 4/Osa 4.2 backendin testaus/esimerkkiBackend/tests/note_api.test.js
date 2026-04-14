const { test, after, before, beforeEach } = require('node:test')
const supertest = require('supertest')
const app = require('../app')
const { sequelize } = require('../utils/db')
const Note = require('../models/note')

const api = supertest(app)

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

before(async () => {
  await sequelize.sync({ force: true })
})

beforeEach(async () => {
  await Note.destroy({ where: {} }) // Tyhjennetään taulukko ennen jokaista testiä
  await Note.create(initialNotes[0])
  await Note.create(initialNotes[1])
})

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

after(async () => {
  await sequelize.close()
})