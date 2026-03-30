# JavaScript osa 3: Oliot (Objects)

# 1.  Oliot

Olio (englanniksi object) on tietorakenne, jossa on avain–arvo-pareja.
Esimerkiksi:

```js
const henkilo = {
  nimi: "Aada",
  ikä: 18
};
```

Esimerkissä muuttujaan *henkilö* tallenetaan olio, jolla on kaksi ominaisuutta/kenttää. Ominaisuuksien nimet ovat *nimi* ja *ikä* ja ne saavat arvot *"Aada"* ja *18*.

Oliota käytetään ohjelmoinnissa jatkuvasti, joten on tärkeää ymmärtää, mitä oliot ovat ja miten niitä käytetään.

# 2.  Ominaisuudet/kentät (englanniksi properties)

Olion ominaisuuksiin viitataan pisteellä:

```js
const henkilo = {
  nimi: "Aada",
  ikä: 18
};

console.log(henkilo.nimi); // Aada
console.log(henkilo.ikä);  // 18
```

Olioon voi myös lisätä uusia ominaisuuksia tai muuttaa jo olemassa olevia:
```js
henkilo.kotimaa = "Suomi";
henkilo.ikä = 19;

console.log(henkilö.kotimaa); // Suomi
console.log(henkilö.ikä); // 19
```
Huomaa, miten muuttuja määriteltiin **const**-avainsanalla, mutta sen kenttiä voidaan silti muuttaa.

## Hakasulkunotaatio
Yleensä olion ominaisuuksiin viitataan yllä esitellyllä pistenotaatiolla, mutta niihin voidaan viitata myös käyttäen hakasulkeita:

```js
console.log(henkilo["nimi"]); // Aada

const avain = "ikä";
console.log(henkilo[avain]); // 18
```

Normaalisti olioiden kanssa tulee käyttää pistenotaatiota. Hakasulkunotaatiota käytetään, jos:
    - Avain sisältää välilyöntejä
    - Avain alkaa numerolla
    - Avain on tallennettu muuttujaan


# 3. Sisäkkäiset oliot

Olio voi sisältää toisen olion:

```js
const käyttäjä = {
  nimi: "Sara",
  osoite: {
    katu: "Koulutie 5",
    kaupunki: "Helsinki"
  }
};

console.log(käyttäjä.osoite.kaupunki); // Helsinki
```

Olion sisällä olevan olion kenttiin voidaan viitata ketjuttamalla viittauksia, kuten yllä olevassa esimerkissä.

Oliot voivat sisältää myös kaikkia muita tietotyyppejä, kuten taulukoita, booleaneja, numeroita, merkkijonoja jne.


# 5. Yhteenveto

*   Olio on avain–arvo-parien kokoelma.
*   Käytetään tallentamaan useita ominaisuuksia yhdestä asiasta.
*   Ominaisuuksia voi lukea, lisätä ja muuttaa.
*   Olion ominaisuuksiin viitataan yleensä pistenotaatiolla.

