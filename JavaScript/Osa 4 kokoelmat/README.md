# JavaScript osa 4: Kokoelmat

# 1. Taulukot

Taulukko (array) on järjestetty lista arvoja, esimerkiksi:

*   lista lukuja
*   lista merkkijonoja
*   lista olioita

Esimerkki:

```js
const numerot = [5, 9, 2, 7];
```

Taulukko määritellään hakasulkeilla ja sen arvot erotellaan toisistaan pilkuilla. Taulukot tulee aina määritellä käyttämällä **const**-avainsanaa. Taulukon sisältöä voi muuttaa, vaikka se on määritelty **const**:lla.

# 2. Taulukon arvoihin viittaaminen

Taulukon arvoihin viitataan hakasulkeilla ja indeksillä. Taulukon ensimmäisen alkion indeksi on nolla.

Taulukon arvoihin viitataan **indeksillä**, ja indeksointi alkaa nollasta.

Esimerkki:
```js
const kaupungit = ["Tampere", "Turku", "Oulu"];
console.log(kaupungit[0]); // Tampere
console.log(kaupungit[2]); // Oulu
```

# 3. Alkioiden käsittely

Taulukon pituuden voi selvittää length-metodilla:
```js
console.log(kaupungit.length); // 3
```

Taulukon alkioiden arvoja voidaan muuttaa:
```js
console.log(kaupungit[1]); // Turku
kaupungit[1] = "Espoo";
console.log(kaupungit[1]); // Espoo
```

# 4. Taulukon läpikäynti

JavaScriptissa on olemassa for-loop, jonka avulla voidaan käydä taulukon alkiot läpi:
```js
for (let i = 0; i < kaupungit.length; i++) {
  console.log(kaupungit[i]);
}
```

Perinteisen for-loopin käyttö on kuitenkin hieman vanhanaikaista. Modernimpi tapa on käyttää taulukkometodeja, kuten **forEach**. Yllä oleva esimerkki toteutetaan **forEach**-metodilla näin:

```js
kaupungit.forEach(kaupunki => {
  console.log(kaupunki);
});
```

## Taulukkometodit

JavaScriptin taulukkometodit ottavat ensimmäisenä parametrina nuolifunktion. Taulukkometodit toimivat siten, että nuolifunktion parametriksi asetetaan yksitellen järjestyksessä jokainen taulukon alkio. Tämän osan tehtävissä tutustutaan taulukkometodeihin **forEach**, **find** ja **filter**. Muihin taulukkometodeihin tutustutaan myöhemmin.

### forEach
Kuten aiemmin nähtiin, **forEach** voidaan käyttää korvaamaan for-silmukka. **forEach** suorittaa nuolifunktion mukaisen koodin vuorollaan juokaisella taulukon alkiolla.

### find
**find** tarvitsee parametriksi nuolifunktion, joka palauttaa totuusarvon (true/false). **find**-metodi palauttaa taulukon ensimmäisen alkion, jolle nuolifunktio palauttaa *true*:
```js
const luvut = [4, 2, 6, 1, 7];
const alleKolme = luvut.find((luku) => {return luku < 3;})
console.log(alleKolme) // 3

// sama voitaisiin tehdä nuolifunktion kompaktimmalla muodolla:
const alleKolme2 = luvut.find((luku) => luku < 3);
console.log(alleKolme) // 3
```

### filter
Myös **filter** tarvitsee parametriksi nuolifunktion, joka palauttaa totuusarvon (true/false). **filter**-metodi muodostaa uuden taulukon, joka sisältää alkuperäisestä taulukosta kaikki ne alkiot, joille nuofunktio palauttaa *true*:
```js
const luvut = [4, 2, 6, 1, 7];
const alleKolme = luvut.filter((luku) => {return luku < 3;})
console.log(alleKolme) // 2 1

// sama voitaisiin tehdä nuolifunktion kompaktimmalla muodolla:
const alleKolme2 = luvut.filter((luku) => luku < 3);
console.log(alleKolme) // 2 1
```

# 5. Oliot taulukossa
Taulukot voivat sisältää mitä tahansa tietotyyppejä, kuten myös alkioita:
```js
const päivämäärät = [
    {
        päivä: 4,
        kuukausi: "tammikuu"
    },
    {
        päivä: 30,
        kuukausi: "syyskuu"
    },
    {
        päivä: 22,
        kuukausi: "tammikuu"
    },
    {
        päivä: 12,
        kuukausi: "lokakuu"
    }
];

// muutetaan toisen alkion päiväksi 3:
päivämäärät[1].päivä = 3;

// haetaan kaikki päivämäärät, jotka ovat tammikuussa:
const tammikuunPäivämäärät = päivämäärät.filter((päivämäärä) => päivämäärä.kuukausi === "tammikuu");

```

# 6. Yhteenveto

*   Taulukko on järjestetty lista arvoja.
*   Arvoja haetaan indeksillä: `taulukko[0]`.
*   `find()` → löytää ensimmäisen sopivan.
*   `filter()` → löytää kaikki sopivat.
*   `forEach()` → käy taulukon läpi.
