/*
Tämä tiedosto on toistaiseksi aika turha.
Se hakee tietokantamallin muistiinpanoille, synkronoi sen ja sitten eksporttaa mallin.
Tämä on järkevää, kun tietokannassa on useita tauluja. Tällöin jokaista ei tarvitse
importata erikseen muissa tiedostoissa.
*/

const Note = require('./note')

Note.sync()

module.exports = Note
