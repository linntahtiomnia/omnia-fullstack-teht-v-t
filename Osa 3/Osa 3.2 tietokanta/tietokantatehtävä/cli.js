require('dotenv').config()
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
});

const main = async () => {
    try {
        // Kirjoita tähän koodisi


    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

main()