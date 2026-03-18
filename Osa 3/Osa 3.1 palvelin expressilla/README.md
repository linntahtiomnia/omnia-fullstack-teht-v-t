# Osa 3.1
## Palvelin expressilla


## Tehtävät
### Esivalmistelut
1. navigoi terminaalissa tästä osasta löytyvään kansioon *puhelinluetteloBackend*
2. Suorita komento **npm init**
    - Voit vastata kaikkiin kysymyksiin oletusvastauksen. Eli paina enteriä niin kauan, että kysymykset loppuvat.
3. Kansioon on nyt ilmestynyt *package.json*-tiedosto, lisää *scripts*-lohkoon rivit
    - "start": "node index.js",
    - "dev": "node --watch index.js",
4. Lisää kansioon uusi tiedosto *index.js* ja kopioi sinne tämä:
    ```js
    const express = require('express')
    const app = express()

    let persons = [
        {
            id: "1",
            name: "Ada Lovelace",
            number: "39-44-5232335"
        },
        {
            id: "2",
            name: "Dan Abramov",
            number: "39-44-5232525"
        },
        {
            id: "3",
            name: "Mary Poppendieck",
            number: "39-44-5232521"
        },
    ]


    const PORT = 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    })
    ```
5. Käynnistä palvelin komennolla **npm run dev**
    - Jos konsoliin tulee virheviesti, tarkista, että olet sammuttanut edellisen osan JSON-palvelimen ja yritä uudelleen.
    

### Tehtävä 3.1 puhelinluettelon backend osa 1

1. Lisää *index.js*-tiedostoon route, joka käsittelee osoitteeseen [http://localhost:3001/api/persons](http://localhost:3001/api/persons) tulevat HTTP GET-pyynnöt ja palauttaa json-muodossa *persons*-taulukon
2. Tarkista, että sovellus toimii avaamalla selaimessa osoitteen [http://localhost:3001/api/persons](http://localhost:3001/api/persons)
    - Selaimessa pitäisi näkyä *persons*-taulukon sisältö
3. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 3.1

### Tehtävä 3.2 puhelinluettelon backend osa 2
1. Lisää *index.js*-tiedostoon route, joka käsittelee osoitteeseen [http://localhost:3001/info](http://localhost:3001/info) tulevat HTTP GET-pyynnöt.
2. Osoitteessa [http://localhost:3001/info](http://localhost:3001/info) tulee näkyä alla olevan kuvan mukainen sivu:
    <img src="./src/plbackend2.png" width="100%" alt="puhelinluettelobackend screenshot" />
    - Sivun pitää näyttää sillä hetkellä puhelinluettelossa olevien henkilöiden määrä ja pyynnön tekohetki
    - Saat tämän hetkisen ajan **new Date()**-komennolla.
3. Tarkista, että sovellus toimii. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 3.2

### Tehtävä 3.3 puhelinluettelon backend osa 3
1. 

