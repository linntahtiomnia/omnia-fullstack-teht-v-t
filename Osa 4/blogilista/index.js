const { Sequelize, Model, DataTypes } = require('sequelize')
const express = require('express')
const app = express()

const dataBaseUrl = "postgres://postgres:SALASANA@localhost:5432/postgres?sslmode=disable"
const sequelize = new Sequelize(dataBaseUrl, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

class Blog extends Model { }
Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'note'
})

Blog.sync()

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.findAll().then(blogs => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  Blog.create(request.body)
    .then((result) => {
      response.status(201).json(result)
    })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})