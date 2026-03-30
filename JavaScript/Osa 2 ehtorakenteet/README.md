

# JavaScript osa 2: Ehtorakenteet

# 1. If-else

JavaScriptissä if-lauseen perusrakenne on seuraava:
```js
if (ehto) {
  // suoritetaan, jos ehto on tosi (true)
}
```

Esimerkiksi:
```js
const ikä = 17;

if (ikä < 18) {
  console.log("Olet alaikäinen.");
}
```

Lisäksi JavaScriptissä on if else- ja else-rakenteet:

```js
if (ehto1) {
  // jos tosi
} if else (ehto2) {
    // jos toinen ehto on tosi
} else {
  // jos sekä ehto1 että ehto 2 ovat epätosia
}
```

Esimerkiksi
```js
const lämpötila = 16;

if (lämpötila < 0) {
  console.log("Ulkona on pakkasta"); // jos lämpötila on alle 0
} else if (sää < 15 ) {
  console.log("Ulkona on viileää"); // jos lämpötila on alle 15 mutta enemmän tai yhtäsuuri kuin 0
} else {
  console.log("Ulkona on lämmin"); // jos lämpötila on vähintään 15
}
```


# 2. Vertailuoperaattorit

Ehtolauseet käyttävät vertailuoperaattoreita:

| Operaattori | Merkitys                                   | Esimerkki         |
| ----------- | ------------------------------------------ | ----------------- |
| `>`         | suurempi kuin                              | `ikä > 18`        |
| `<`         | pienempi kuin                              | `pisteet < 100`   |
| `>=`        | suurempi tai yhtä suuri                    | `ikä >= 18`       |
| `<=`        | pienempi tai yhtä suuri                    | `luku <= 10`      |
| `===`       | yhtäsuuri JA sama tietotyyppi              | `nimi === "Aada"` |
| `==`        | yhtäsuuri mutta tietotyyppi voi olla eri   | `ikä == "20"`     |
| `!==`       | eri kuin                                   | `ikä !== 20`      |

 
Huom! yhtäsuuruus operaattoreita on kaksi **==** ja **===**, joista **===** on turvallisempi. **==** ei huomioi eroa tyypeissä eli alla olevat vertailut ovat kaikki tosia:
```js
'1'==1
'true'== true
'' == 0
```



# 3. Loogiset operaattorit (AND, OR)

JavaScriptissa toimii samat loogiset operaattorit kuin Pythonissa. Ja eli AND operaattori on **&&**, ja tai eli OR operaattori on **||**.

## **JA: `&&`**

Ehto on tosi vain, jos *molemmat* ovat tosia.

```js
if (ikä >= 18 && opiskelija === true) {
  console.log("Saat alennuksen.");
}
```

## **TAI: `||`**

Ehto on tosi, jos *jompikumpi* on tosi.

```js
if (sää === "sade" || sää === "myrsky") {
  console.log("Huono sää ulkoilla.");
}
```

# 4. Ehto-operaattori `? :`

JavaScriptissa on if-else -rakenteen lisäksi myös ehto-operaattori. Ehto-operaattorin perusrakenne on tämä
```js
    ehto ? palautusarvo, jos tosi : palautusarvo, jos epätosi
```

Esimerkkejä:
```js
    const ikä = 19;
    const tulostus = ikä < 18 ? 'Olet alaikäinen' : 'Olet täysi-ikäinen';
    console.log(tulostus); // pitäisi tulostaa "Olet täysi-ikäinen"
``` 
```js
    console.log(sää==="sataa" ? "ulkona sataa" : "ulkona ei sada"); // pitäisi tulostaa "ulkona sataa"
```

## Milloin käyttää ehto-operaattoria ja milloin if-else -rakennetta?
Ehto-operaattori on erityisen hyvä, kun halutaan esimerkiksi määritellä muuttuja ehdollisesti, sillä if-else -rakenteen kanssa jouduttaisiin käyttämään **let**-määritellyllä tehtyjä muuttujia, joka lisää virheiden riskiä myöhemmin koodissa.

If-else -rakenne on parempi vaihtoehto silloin, kun ehtoon liittyy useita rivejä suoritettavaa koodia. If-else -rakenne on parempi myös monimutkaisemmissa tapauksissa, jotka esimerkiksi vaativat sisäkkäisiä ehtoja.



# 5. Yleisiä virheitä

*   Yksi yhtäsuuruusmerkki ehtolauseessa
*   Unohtuneet tavalliset sulkeet tai aaltosulkeet if-else -rakenteessa

