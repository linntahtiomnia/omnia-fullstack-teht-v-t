/*
  Tämä tiedosto sisältää yksinkertaisia testejä average-funktiolle, joka on määritelty utils/for_testing.js-tiedostossa.
  Testit on kirjoitettu Node.js:n sisäänrakennetulla testausmoduulilla, joka löytyy node:test-kirjastosta.
*/
const { test, describe } = require('node:test')
const assert = require('node:assert')

// Importataan average-funktio ja tallennetaan se muuttujaan, jotta sitä voidaan käyttää testeissä helposti.
const average = require('../utils/for_testing').average

// describe-funktiolla voidaan ryhmitellä testit loogisiksi kokonaisuuksiksi.
// Tässä tapauksessa kaikki average-funktiota koskevat testit on ryhmitelty average-nimiseen kokonaisuuteen.
// describe-funktion ensimmäinen argumentti on kuvaava nimi testikokonaisuudelle, ja toinen argumentti on nuolifunktio, joka toteuttaa testit.
describe('average', () => {
  // Testit määritellään test-funktiolla. Funktio ottaa kaksi argumenttia: testin nimen ja testin toteuttavan funktion.
  test('of one value is the value itself', () => {
    // assert.strictEqual funktiolla tarkistetaan, että average-funktion palauttama arvo on oikein.
    // Tässä tapauksessa average-funktion pitäisi palauttaa 1, kun sille annetaan taulukko [1],
    // joka sisältää vain yhden numeron, 1.
    assert.strictEqual(average([1]), 1)
  })

  test('of many is calculated right', () => {
    // Tässä testissä tarkistetaan, että average-funktio laskee keskiarvon oikein, kun sille annetaan useampi numero sisältävä taulukko.
    // Taulukko [1, 2, 3, 4, 5, 6] sisältää kuusi numeroa, joiden summa on 21.
    // Keskiarvo saadaan jakamalla summa (21) lukujen määrä (6), jolloin saadaan 3.5.
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })

  test('of empty array is zero', () => {
    // Tässä testissä testataan erikoistapausta, jossa average-funktiolle annetaan tyhjä taulukko.
    // Tällöin funktio palauttaa 0, koska keskiarvoa ei voida laskea ilman lukuja.
    assert.strictEqual(average([]), 0)
  })
})