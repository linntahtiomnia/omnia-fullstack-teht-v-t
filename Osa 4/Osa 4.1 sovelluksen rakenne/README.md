# Osa 4.1
## Sovelluksen rakenne

Tässä osassa tutustutaan sovelluksen rakenteeseen, ja ohjelmoidaan palvelin annetusta sovelluspohjasta. Tästä kansiosta löytyy uusi versio tutusta muistiinpanosovelluksen backEndistä, joka on refaktoroitu moduuleihin. Tämän osan tehtävien tarkoituksena on muodostaa samaa rakennetta noudattava sovellus. Alla on kaavio sovelluksen rakenteesta:
```js
├── controllers
│   └── notes.js
├── models
│   └── note.js
│   └── index.js
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
Osan 4 kaikissa tehtävissä tehdään samaa blogilista-sovellusta. Siksi tehtävä kansio löytyy osan 4 pääkansiosta, eikä osa 4.1 -kansiosta. *blogilista*-kansiosta löytyy *index.js*-tiedosto, joka sisältää valmiin sovellusrungon. 
### Tehtävä 4.1 blogilista osa 1
1. Aloita luomalla uusi node-projekti: navigoi terminaalissa *blogilista*-kansioon ja suorita komento **npm init**
  - Voit vastata kysymyksiin oletusvastauksen eli painaa enteriä
2. Kansiosta pitäisi nyt löytyä *package.json*-tiedosto. Haluamme pystyä pitämään sovelluksen käynnissä siten, että koodiin tehdyt muutokset tulevat heti käyttöön. Lisää *package.json*-tiedoston scripts osioon seuraavat sivit:
  - "start": "node index.js",
  - "dev": "node --watch index.js",
3. Sovelluksen voi nyt käynnistää komennolla **npm run dev**. Jos yrität käynnistää sovelluksen, huomaat, että terminaaliin tulee virhe ilmoitus puuttuvasta moduulista. Seuraavaksi pitää asentaa tarvittat kirjastot:
  -Asenna sequelize ja express komennolla **npm i *kirjaston nimi***
4. Kansiossa pitäisi nyt olla kansio *node_modules*, joka sisältää kirjastojen ja muiden riippuvuuksien asennukset. Huomaat ehkä versionhallinta työkaluun ilmestyneen valtavan määrän uusia tiedostoja. Emme missään nimessä halua lisätä näitä tiedostoja versionhallintaan, joten lisää *blogilista*-kansioon uusi tiedosto *.gitignore* ja lisää sinne rivi **node_modules**
  - *.gitignore*-tiedosto määrittelee tiedostot, jotka versionhallinta jättää huomiotta. Lisättyäsi sinne rivin **node_modules**, versionhallinta jättää kansion ja kaikki sen tiedostot huomiotta.
5. Muuta vielä *index.js*-tiedoston riville 5 oikea osoite tietokannallesi.
6. Varmista, että tietokanta on käynnissä ja käynnistä sovellus **npm run dev**-komennolla. Sovelluksen pitäisi nyt toimia ilman virheitä. Testaa esimerkiksi REST vlientilla, että pystyt lisäämään uusia blogeja tietokantaan.
7. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 4.1

### Tehtävä 4.2 blogilista osa 2
