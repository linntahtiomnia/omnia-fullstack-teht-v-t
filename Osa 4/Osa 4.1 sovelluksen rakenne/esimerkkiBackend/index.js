/*
  Tämä on sovelluksen käynnistystiedosto. Se hakee portin ja tietokantayhteyden URL:n ympäristömuuttujista,
  käynnistää Express-sovelluksen ja yhdistää tietokantaan.
*/
const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

const { connectToDatabase } = require('./utils/db')

app.listen(config.PORT, () => {
  connectToDatabase()
  logger.info(`Server running on port ${config.PORT}`)
})