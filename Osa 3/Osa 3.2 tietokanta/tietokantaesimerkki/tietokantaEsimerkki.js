require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

class Note extends Model { }
Note.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
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

const main = () => {
  /*
  // Voit tehdä tietokantaan suoria SQL-kyselyitä käyttämällä sequelize.query-funktiota.
  // Tämä on hyödyllistä, jos haluat suorittaa monimutkaisia kyselyitä, joita ei ole määritetty mallissasi.
  // Yksinkertaisempien kyselyiden tekemiseen on kuitenkin suositeltavaa käyttää mallin tarjoamia metodeja, kuten findAll, findByPk, create, update ja destroy.
  sequelize.query("SELECT * FROM notes", { type: QueryTypes.SELECT }).
    then(notes => {
      console.log(notes)
      sequelize.close().then(() => {
        console.log('Connection has been closed successfully.')
      })
  */
  // Haetaan muistiinpanot käyttämällä findAll-metodia, joka palauttaa promisen.
  Note.findAll().then(notes => {
    console.log(notes)
    sequelize.close().then(() => {
      console.log('Connection has been closed successfully.')
    })
  })
}

main()