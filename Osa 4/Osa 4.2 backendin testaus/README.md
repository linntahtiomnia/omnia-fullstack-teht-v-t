# Osa 4.2
Tässä osassa opetellaan testauksen alkeita tutustumalla ensin yksikkötestaukseen ja sitten backendin testaukseen supertest-kirjastolla.
## Yksikkötestaus
Tästä kansiosta löytyy edellisestä osasta tuttu notes-sovellus, johon on lisätty testit. Aloita ensin tutustumalla yksikkötesteihin. Koska sovellus itsessään on niin yksinkertainen, ei sille kannata kirjoittaa yksikkötestejä. Siksi *utils*-kansioon on lisätty tiedosto *for_testing.js*, joka sisältää kaksi yksinkertaista funktiota. Näille funktioille on kirjoitettu yksikkötestit, jotka löytyvät *test*-kansiosta tiedostoista *reverse.test.js* ja *average.test.js*. Tutustu ensin reverse-funktion testeihin ja sitten average-funktion testeihin. Pysty suorittamaan testit komennolla **npm run test**. Varmista, että ymmärrät seuraavat käsitteet: *test-funktio*, *describe-funktio*, *assert-kirjaston strictEqual-funktio*. Varmista myös, että ymmärrät yksikkötestauksen periaatteen, eli miten funktion palautusarvoa verrataan odotettuun palautusarvoon. Yksikkötestausta harjoitellaan tehtävissä xxxx

## Tehtävät
Tehtävissä jatketaan blogilista-sovellusta, joka aloitettiin osassa 4.1. Tee tämän osan tehtävät samaan kansiosta Osa 4 löytyvään blogilista-sovellukseen.

Tämän osan tehtävissä tekoälyn käyttö (etenkin vs codeen integroitu copilot) voi olla järkevää ja on sallittua. Varmista kuitenkin, että ymmärrät itse kaiken koodin, mitä palautat. Tee kuitenkin vähintään yksi apufunktioista ja sen testit kokonaan ilman tekoälyä. Sinun täytyy myös kysyttäessä osata selittää, mitä koodisi tekee, vaikka olisit käyttänyt tekoälyä. Jos käytät tekoälyä, lisää koodiin kommentti/kommentit, joissa kerrot, miten olet käyttänyt tekoälyä. Esim. "Copilot teki mostLikes-funktion algoritmin" tai "Copilot teki testidatan yksikkötestejä varten sekä teki testit totalLikes-funktiolle".

### Tehtävä xx yksikkötestit osa 1
1. Lisää *package.json*-tiedoston scripts osioon uusi rivi ** "test": "node --test"**
2. Lisää *utils*-kansioon uusi tiedosto *list_helper.js* ja kopioi sinne alla oleva koodi:
  ```js
    const dummy = (blogs) => {
      // ...
    }

    module.exports = {
      dummy
    }
  ```
  - Tähän tiedostoon tehdään yksinkertaisia funktioita, jotka eivät varsinaisesti liity blogilista-sovellukseen. Funktioiden tarkoituksena on vain päästä harjoittelemaan yksikkötestausta.
2. Muuta funktiota *dummy* siten, että se palauttaa aina luvun 1
3. Lisää blogilista-kansioon uusi kansio *tests* ja lisää sinne tiedosto *list_helper.test.js* Kopioi tiedostoon alla oleva koodi:
  ```js
    const { test, describe } = require('node:test')
    const assert = require('node:assert')
    const listHelper = require('../utils/list_helper')

    test('dummy returns one', () => {
      const blogs = []

      const result = listHelper.dummy(blogs)
      assert.strictEqual(result, 1)
    })
  ```
4. Varmista, että testikonfiguraatiosi toimii suorittamalla komento **npm run test** Terminaalissa pitäisi näkyä, että testi 'dummy returns one' menee läpi eli "pass".
5. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli

### Tehtävä xx yksikkötestit osa 2
1. Tee *list_helpers.js*-tiedostoon uusi funktio *totalLikes*, joka:
  - Ottaa parametrina taulukon blogi-objekteja
  - Palauttaa taulukon blogien tykkäysten eli likejen yhteenlasketun määrän
  - Vinkki: kannattaa käyttää *reduce*-taulukkometodia
2. Lisää *list_helpers.test.js*-tiedostoon yksikkötestit tekemällesi *totalLikes*-funktiolle. Määrittele testit *describe*-lohkon sisään. Testaa ainakin seuraavat tilanteet:
  - *totalLikes*-funktio saa parametrina tyhjän taulukon
  - *totalLikes*-funktio saa parametrina taulukon, joka sisältää vain yhden blogi-objektin
  - *totalLikes*-funktio saa parametrina taulukon, joka sisältää useita blogeja

  - Alla on esimerkki, testisyötteen määrittelystä describe-funktion alussa. Voit kopioida sen omaan testitiedostoosi. Esimerkki sisältää jo yhden valmiin testin:
  ```js
  describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result, 5)
      })
  })
  ```
  - Alla on valmis lista blogeja, jonka voit kopioida omaksi testisyötteeksi (voit käyttää samaa testidataa myös muissa tehtävissä):
  ```js
  const blogs = [
    {
      id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7
    },
    {
      id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5
    },
    {
      id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12
    },
    {
      id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10
    },
    {
      id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0
    },
    {
      id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2W
    }  
  ]
  ```
3. Varmista, että tekemäsi testit menevät läpi. Jos jokin testi ei mene läpi, mieti tarkkaan, onko virhe testissä vai itse funktiossa, ja tee korjaus oikeaan paikkaan.
4. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli

### Bonustehtävä xx yksikkötestit osa 3
1. Tee *list_helpers.js*-tiedostoon uusi funktio *favoriteBlog*, joka:
  - Saa parametrina taulukon blogi-olioita
  - Palauttaa blogin, jolla on eniten tykkäyksiä, eli jolla on suurin arvon kentässä likes.
  - Jos usealla blogilla on sama tykkäysmäärä, voit palauttaa niistä ensimmäisen.
2. Lisää *list_helpers.test.js*-tiedostoon yksikkötestit tekemällesi *favoriteBlog*-funktiolle. Määrittele testit *describe*-lohkon sisään. Tee testit jälleen seuraaville tilanteille:
  - *favoriteBlog*-funktio saa parametrina tyhjän taulukon
  - *favoriteBlog*-funktio saa parametrina taulukon, joka sisältää vain yhden blogi-objektin
  - *favoriteBlog*-funktio saa parametrina taulukon, joka sisältää useita blogeja

  - Huom: nyt haluamme vertailla olioita eikä esimerkiksi nuemroita tai merkkijonoja. Tässä tapauksessa kannattaa strictEqual metodin sijaan käyttää [deepStrictEqual](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)-metodia
3. Varmista, että tekemäsi testit menevät läpi. Jos jokin testi ei mene läpi, mieti tarkkaan, onko virhe testissä vai itse funktiossa, ja tee korjaus oikeaan paikkaan.
4. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli

### Bonustehtävä xx yksikkötestit osa 4
1. Tee *list_helpers.js*-tiedostoon uusi funktio *mostBlogs*, joka:
  - Saa parametrina taulukon blogi-olioita
  - Funktio selvittää kirjoittajan (author), jolla on eniten blogeja
  - Palauttaa olion, jolla on kenttä *author*, jonka arvo on eniten blogeja tehnyt kirjoittaja, sekä kenttä *blogs*, joka sisältää kirjoittajan tekemien blogien lukumäärän.
  - Jos usealla kirjoittajalla on sama määrä blogeja, riittää, että palautat niistä jonkun.

  - Vinkki: voi olla järkevää tutustua [Lodash](https://lodash.com/)-kirjastoon, mutta tehtävä onnistuu ilmankin.
2. Lisää *list_helpers.test.js*-tiedostoon yksikkötestit tekemällesi *mostBlogs*-funktiolle. Määrittele testit *describe*-lohkon sisään. Tee testit jälleen seuraaville tilanteille:
  - *mostBlogs*-funktio saa parametrina tyhjän taulukon
  - *mostBlogs*-funktio saa parametrina taulukon, joka sisältää vain yhden blogi-objektin
  - *mostBlogs*-funktio saa parametrina taulukon, joka sisältää useita blogeja

  - Huom: nyt haluamme vertailla olioita eikä esimerkiksi nuemroita tai merkkijonoja. Tässä tapauksessa kannattaa strictEqual metodin sijaan käyttää [deepStrictEqual](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)-metodia
3. Varmista, että tekemäsi testit menevät läpi. Jos jokin testi ei mene läpi, mieti tarkkaan, onko virhe testissä vai itse funktiossa, ja tee korjaus oikeaan paikkaan.
4. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli

### Bonustehtävä xx yksikkötestit osa 5
1. Tee *list_helpers.js*-tiedostoon uusi funktio *mostLikes*, joka:
  - Saa parametrina taulukon blogi-olioita
  - Funktio selvittää kirjoittajan (author), jonka blogeilla on suurin yhteenlaskettu tykkäysten määrä
  - Palauttaa olion, jolla on kenttä *author*, jonka arvo on eniten tykkäyksiä saanut kirjoittaja, sekä kenttä *likes*, joka sisältää kirjoittajan tekemien blogien tykkäysten lukumäärän.
  - Jos usealla kirjoittajalla on sama määrä tykkäyksiä, riittää, että palautat niistä jonkun.

  - Vinkki: voi olla järkevää tutustua [Lodash](https://lodash.com/)-kirjastoon, mutta tehtävä onnistuu ilmankin.
2. Lisää *list_helpers.test.js*-tiedostoon yksikkötestit tekemällesi *mostLikes*-funktiolle. Määrittele testit *describe*-lohkon sisään. Tee testit jälleen seuraaville tilanteille:
  - *mostLikes*-funktio saa parametrina tyhjän taulukon
  - *mostLikes*-funktio saa parametrina taulukon, joka sisältää vain yhden blogi-objektin
  - *mostLikes*-funktio saa parametrina taulukon, joka sisältää useita blogeja

  - Huom: nyt haluamme vertailla olioita eikä esimerkiksi nuemroita tai merkkijonoja. Tässä tapauksessa kannattaa strictEqual metodin sijaan käyttää [deepStrictEqual](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message)-metodia
3. Varmista, että tekemäsi testit menevät läpi. Jos jokin testi ei mene läpi, mieti tarkkaan, onko virhe testissä vai itse funktiossa, ja tee korjaus oikeaan paikkaan.
4. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli


## Backendin testaus
