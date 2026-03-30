# JavaScript osa 1: Muuttujat ja funktiot

# 1. Muuttujat

Modernissa JavaScriptissa on kaksi tapaa määritellä muuttujia, **const** ja **let**:
```js
const vakioMuuttuja = 3;
let tavallinenMuuttuja = "tätä voi muuttaa";
```

**const**-avainsanalla määritellyt muuttujat ovat oikeastaan vakioita, sillä niiden arvoa ei voi muuttaa. Jos **const**-määrittelyllä tehdyn muuttujan arvoa yrittää muuttaa, päädytään virhetilanteeseen. **let**-avainsanalla määriteltyjen muuttujien arvoa voi vaihtaa tavallisesti.

Koodatessa tulee suosia **const**-määrittelyä aina, kun mahdollista. Tarpeeton **let**-määrittelyn käyttö lisää virheiden riskiä.

Nimeä muuttujat aina kuvaavasti (älä tee `x1`, `data`, `juttu`, vaan `ika`, `nimi`, `pisteet`).

Huom! Mikäli **const**-määrittelyllä tehty muuttuja sisältää esimerkiksi taulukon tai olion, sen sisältöä voi muuttaa.



### Esimerkki:

```js
let ikä = 17;
ikä = 18; // OK

const nimi = "Aada";
nimi = "Lea"; // Virhe — const-arvoa ei voi muuttaa
```

## Yleisimpiä tietotyyppejä JavaScriptissä

| Tyyppi               | Esimerkki                    |
| -------------------- | ---------------------------- |
| Number               | `5`, `3.14`                  |
| String (teksti)      | `"Moikka"`, `'Hei'`          |
| Boolean (totuusarvo) | `true`, `false`              |
| Array (taulukko)     | `[1, 2, 3]`                  |
| Object (olio)        | `{ nimi: "Matti", ikä: 20 }` |


# 2. Funktiot

## Funktion määrittely

JavaScriptissä on kaksi tapaa määritellä funktio
```js
// Perinteinen funktion määrittely:
function tervehdys() {
  console.log("Hei opiskelija!");
}

// Modernimpi nuolifunktio:
const tervehdys = () => {
    console.log("Hei opiskelija!");
}
```

Molemmat ylläolevat esimerkit toteuttavat käytännössä saman funktion. Nykyään suositaan nuolifunktion. Käytä tehtävissä nuolifunktiota!

Funktiota kutsutaan käyttämällä funktion nimeä ja tavallisia sulkuja:
```js
const tervehdys = () => {
    console.log("Hei opiskelija!");
}

tervehdys() // Kutsutaan funktiota

```

Nimeä myös funktiot aina kuvaavasti. Jos funktion nimi muodostuu useasta sanasta, käytetään niin sanottua camelCasea: kaikki sanat kirjoitetaan yhteen, mutta jokainen uusi sana alkaa isolla kirjaimella. Esim. *laskeLuvut* tai *tarkistaHenkilönIkä*.

### Lisätietoa, jota ei tarvitse tehtävissä:
**function**-avainsanalla määritellyn ja nuolifunktion välillä on yksi merkittävä ero. Ne käsittelevät *this*-avainsanaa eri tavalla. *this* vastaa Pythonin *self* ominaisuutta olioiden metodeissa. Lisätietoa voi lukea [täältä](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)


## Parametrit ja palautusarvot

Funktiolle voi antaa tietoa parametreilla:

```js
const sanoHei = (nimi) => {
    console.log(`Hei ${nimi}!`) // ``-hipsuilla voidaan helposti määritellä parametrisoitu merkkijono
}


sanoHei("Aada"); // Kutsutaan funktiota parametrilla "Aada". Tämä saa funktion tulostamaan "Hei Aada!"
```

Funktion palautusarvo määritellään *return* avulla:
```js
const minusLasku = (luku1, luku2) => {
    return luku1-luku2;
}

const erotus = minusLasku(4, 3) // Kutsutaan funktiota parametreilla 4 ja 3 ja tallenetaan palautusarvo muuttujaan

console.log(erotus) // Tulostetaan palautusarvo. Tämän pitäisi tulostaa "1".
```

## Nuolifunktion kompaktimpi muoto

Jos funktio sisältää vain yhden komennon, voidaan käyttää nuolifunktion kompaktimpaa muotoa:


```js
// Tavallinen nuolifunktio
const kertoLasku = (x, y) => {
    return x * y;
}

// Kompaktimpi nuolifunktio
const kertoLasku = (x, y) => x * y;

```

Ylläolevan esimerkit tuottavat täysin saman funktion. Kompaktissa muodossa ei tarvitse aaltosulkeita tai return-sanaa: funktio palauttaa ainoan komentonsa tuloksen.

# 3. Muuta

JavaScriptissa voidaan tulostaa asioita **console.log()**-komennolla (vertaa Pythonin print()). Näissä tehtävissä tulostus tulee näkyviin terminaaliin, mutta web-sovelluksia kehittäessä console.log-tulostus tulee yleensä näkyviin selaimen developer toolsi konsoliin.

Esimerkki:
```js
const luku = 10;
console.log(luku); //Terminaaliin tulostuu "10"
```

# 4. Yhteenveto

## Muuttujat

*   **let** kun arvo muuttuu
*   **const** kun arvo pysyy samana. Käytä **const** aina, kun mahdollista.
*   Käytä kuvaavia nimiä

## Funktiot

*   Käytä nuolifunktioita
*   Nimeä funktiot kuvaavasti. Jos funktion nimi muodostuu useasta sanasta, käytä camelCasea
*   Käytä nuolifunktion kompaktimpaa muotoa, jos funktio sisältää vain yhden komennon