// Tähän tiedostoon/moduuliin on siirretty tietokantayhteyden muodostus
// ja Note-mallin määrittely. Näin index.js-tiedosto pysyy siistimpänä ja helpommin luettavana.

const { Sequelize, Model, DataTypes } = require('sequelize')

// Luodaan uusi Sequelize-instanssi, joka yhdistää sovelluksen tietokantaan.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
})

// Määritellään Note-malli, joka kuvaa notes-taulukon rakennetta tietokannassa.
class Note extends Model {}
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: { // Määritellään content-kentälle validointisäännöt, ja niille sopivat virheviestit.
      notEmpty: { // content-kenttä ei saa olla tyhjä.
        msg: 'Content cannot be empty'
      },
      len: { // Viestin pituus tulee olla 5 ja 255 merkin välillä.
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
// Synkronoidaan Note-malli tietokantaan.
// Tämä luo notes-taulukon tietokantaan, jos sitä ei vielä ole.
Note.sync()

module.exports = { Note }