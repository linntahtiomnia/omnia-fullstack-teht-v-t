/*
  Tämä tiedosto sisältää yksinkertaisia funktioita, joille voidaan kirjoittaa yksikkötestit.
  Nämä funktiot eivät liity mitenkään muuhun sovellukseen, vaan toimivat vain esimerkkeinä
  funktioista, joille kannattaa kirjoittaa yksikkötestit.
*/

// Tämä funktio ottaa merkkijonon ja palauttaa sen käänteisenä. Esimerkiksi "abc" -> "cba".
const reverse = (string) => {
  return string
    .split('')
    .reverse()
    .join('')
}

// Tämä funktio ottaa taulukon numeroita ja palauttaa niiden keskiarvon. Esimerkiksi [1, 2, 3] -> 2.
const average = (array) => {
  const reducer = (sum, item) => {
    return sum + item
  }

  return array.reduce(reducer, 0) / array.length
}

// Exportataan funktiot, jotta niitä voidaan käyttää muissa tiedostoissa, tässä tapauksessa testeissä.
module.exports = {
  reverse,
  average,
}