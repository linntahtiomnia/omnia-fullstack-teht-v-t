/*
  Tämä tiedosto sisältää yksinkertaisia testejä reverse-funktiolle, joka on määritelty utils/for_testing.js-tiedostossa.
  Testit on kirjoitettu Node.js:n sisäänrakennetulla testausmoduulilla, joka löytyy node:test-kirjastosta.
*/

const { test } = require('node:test')
const assert = require('node:assert')

// Importataan reverse-funktio ja tallennetaan se muuttujaan, jotta sitä voidaan käyttää testeissä helposti.
const reverse = require('../utils/for_testing').reverse

// Testi määritellään test-funktiolla. Funktio ottaa kaksi argumenttia: testin nimen ja testin toteuttavan funktion.
test('reverse of a', () => {
  // Kutsutaan reverse-funktiota ja tallennetaan sen palauttama arvo result-muuttujaan.
  const result = reverse('a')

  // assert-kirjaston strictEqual-funktiolla tarkistetaan, että result-muuttujan arvo on 'a'.
  // Jos arvo ei ole 'a', testi epäonnistuu ja antaa virheilmoituksen.
  assert.strictEqual(result, 'a')
})

test('reverse of react', () => {
  // Kutsutaan reverse-funktiota ja tallennetaan sen palauttama arvo result-muuttujaan.
  const result = reverse('react')

  // Taas tarkistetaan, että funktion palautusarvo on oikein.
  // Koska funktiota kutsuttiin argumentilla 'react', odotettu palautusarvo on 'tcaer'.
  assert.strictEqual(result, 'tcaer')
})

// Testauksessa on tärkeää huomioida erilaiset syötteet, kuten eri pituiset merkkijonot,
// tai tässä tapauksessa palindromit.
// Yleensä on hyvä huomioida myös erikoistapaukset, kuten tyhjä merkkijono,
// mutta tässä esimerkissä keskitytään vain muutamaan testitapaukseen.
test('reverse of saippuakauppias', () => {
  const result = reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})