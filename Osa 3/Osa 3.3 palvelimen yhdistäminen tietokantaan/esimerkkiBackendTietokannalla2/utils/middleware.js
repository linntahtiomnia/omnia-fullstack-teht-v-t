// Tässä tiedostossa on väärä end of line merkki, joten lintteri valittaa jokaikisestä rivistä.
// Voit vaihtaa oikean end of line merkin vs coden alareunasta klikkaamalla "CRLF" ja valitsemalla "LF".

// Middleware, joka käsittelee olemattomien osoitteiden pyynnöt.
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// Middleware, joka käsittelee sovelluksessa tapahtuneet virheet.
const errorHandler = (error, request, response, next) => {
  // alla oleva rivi aiheuttaa lintterissä virheen, sillä rivin lopussa on ylimääräisiä välilyöntejä.
  console.error(error.message)

  // SequelizeDatabaseError-virhe syntyy, kun yritetään hakea muistiinpanoa, jonka id ei ole kelvollinen.
  if (error.name === 'SequelizeDatabaseError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  // SequelizeValidationError-virhe syntyy, kun yritetään luoda tai päivittää muistiinpanoa, 
  // joka ei täytä Note-mallin määrittelemää rakennetta.
  if (error.name == 'SequelizeValidationError') { // Tällä rivillä lintter valittaa vertailuoperaattorista. Yhtäsuuruusmerkkejä pitäisi olla 3.
    return response.status(400).json({ error: error.message }) // lintteri valittaa tästä rivistä, koska sisennys on väärän kokoinen
  }

  next(error)
}

// exportataan middlewaret, jotta ne voidaan ottaa käyttöön muissa tiedostoissa, kuten index.js:ssä.
exports.module = {
  unknownEndpoint,
  errorHandler // lintteri valittaa myös tästä rivistä, koska sisennystä ei ole.
}