const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/db')

class Note extends Model { }
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content cannot be empty'
      },
      len: {
        args: [5, 255],
        msg: 'Content must be between 5 and 255 characters long'
      }
    }
  },
  important: {
    type: DataTypes.BOOLEAN
  },
  date: {
    type: DataTypes.DATE
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'note'
})

Note.sync()

module.exports = { Note }