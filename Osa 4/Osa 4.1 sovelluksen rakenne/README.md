# Osa 4.1
## Sovelluksen rakenne

Tässä osassa tutustutaan sovelluksen rakenteeseen, ja ohjelmoidaan palvelin annetusta sovelluspohjasta. Tästä kansiosta löytyy uusi versio tutusta muistiinpanosovelluksen backEndistä, joka on refaktoroitu moduuleihin. Tämän osan tehtävien tarkoituksena on muodostaa samaa rakennetta noudattava sovellus. Alla on kaavio sovelluksen rakenteesta:
```js
├── controllers
│   └── notes.js
├── models
│   └── note.js
├── utils
│   ├── config.js
│   ├── logger.js
│   └── middleware.js  
├── app.js
├── index.js
├── package-lock.json
├── package.json
```

Tutustu esimerkkisovelluksen eri tiedostoihin ennen kuin aloitat tehtävät. Varmista, että ymmärrät, mikä on eri tiedostojen rooli. Kiinnitä erityisesti huomiota siihen, miten routejen polku on määritelty osittain *app.js*-tiedostossa.

## Tehtävät
Osan 4 kaikissa tehtävissä tehdään samaa blogilista-sovellusta. Siksi tehtävä kansio löytyy osan 4 pääkansiosta, eikä osa 4.1 -kansiosta.
### Tehtävä 4.1 blogilista osa 1
1. 