# Osa 1.2
## JavaScriptia
Tässä osassa keskitytään JavaScriptiin, ja miten sitä käytetään Reactin kanssa. Kansiosta löytyy esimerkkisovellus *javaScriptEsimerkki*. Aloita tutustumalla esimerkkisovellukseen. Voit jälleen muokata koodia ja katsoa, mitä muutoksia ne aiheuttavat selaimessa. Varmista, että ymmärrät seuraavat käsitteet ja tiedät, miten niitä käytetään: *olio eli objekti*, *taulukko*, *prop tai propsi*, *funktio*.

## Tehtävät:

Näissä tehtävissä on tarkoitus jälleen refaktoroida koodia, ja jatkaa kurssitiedot tehtävää. Jokaisessa tehtävässä aloitetaan muuttamalla App-komponentissa olevaa muuttujan määrittelyä, minkä jälkeen muu koodi korjataan takaisin toimivaksi. Tarkoitus on harjoitella olioiden ja taulukoiden käsittelyä. Muista tehtävien aikana pitää sovellus koko ajan käynnissä selaimessa, ja selaimen konsoli auki.

### Ennen tehtäviä: kurssitiedot tehtävän kopiointi
Jatkamme samaa kurssitiedot tehtävää kuin osassa 1.1 mutta haluamme ensin tehdä siitä uuden kopion. Seuraa alla olevia ohjeita:

1. Kopioi koko kurssitiedot kansio "Osa 1.2 javascriptia"-kansioon
    - On tärkeää, että kopioit koko kansion!
2. Poista tästä uudesta versiosta **node_modules**-kansio (eli äsken "Osa 1.2 javascriptia" kansioon kopioimastasi kurssitiedot-kansiosta)
3. Komentorivillä navigoi uuteen **\Osa 1.2 javascriptia\kurssitiedot**-kansioon ja suorita komento **npm i**
4. Nyt voit käynnistää sovelluksen normaalisti komennolla **npm run dev**

### Tehtävä 1.4 Kurssitiedot osa 3
1. Korvaa App-komponentin alun muuttujan määrittelyt alla olevilla määrittelyillä:
    ```jsx
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    ```
    - Huomaa, miten osat (parts) on nyt määritelty olioina
2. Korjaa sovellus toimivaksi
    - Sovelluksen voi korjaamiseen ei ole yhtä oikeaa tapaa
    - Käytännössä joudut muuttamaan sitä, mitä arvoja annat komponenttien propseille ja/tai miten propseja käytetään komponenteissa
    - Huom! Muista, ettei olioita ei voi renderöidä suoraan vaan täytyy viitata sen kenttiin.
3. Kun sovellus taas toimii, etkä näe selaimen konsolissa virheitä, palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 1.4


### Tehtävä 1.5 Kurssitiedot osa 4
1. Korvaa App-komponentin alun muuttujan määrittelyt alla olevilla määrittelyillä:
    ```jsx
    const course = 'Half Stack application development'
    const parts = [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        {
        name: 'Using props to pass data',
        exercises: 7
        },
        {
        name: 'State of a component',
        exercises: 14
        }
    ]
    ```
    - Huomaa, miten osat (parts) on nyt määritelty taulukkona (array), joka sisältää olioita.
2. Korjaa sovellus toimivaksi seuraavalla tavalla:
    1. Muuta komponentteja *Content* ja *Total* siten, että ne ottavat vain yhden propsin *parts*, jonka arvoksi annetaan koko taulukko "parts".
    2. Korjaa komponentit *Content* ja *Total*
4. Tarkista, että *App*-komponenttisi näyttää nyt tältä:
    ```jsx
    const App = () => {
        const course = 'Half Stack application development'
        const parts = [
            {
            name: 'Fundamentals of React',
            exercises: 10
            },
            {
            name: 'Using props to pass data',
            exercises: 7
            },
            {
            name: 'State of a component',
            exercises: 14
            }
        ]

        return (
            <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
            </div>
        )
    }
    ```
3. Kun sovellus taas toimii, etkä näe selaimen konsolissa virheitä, palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 1.5

### Tehtävä 1.6 Kurssitiedot osa 5
1. Korvaa App-komponentin alun muuttujan määrittelyt alla olevilla määrittelyillä:
    ```jsx
    const course = {
        name: 'Half Stack application development',
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
        ]
    }
    ```
    - Huomaa, miten kaikki kurssin tiedot on nyt tallennettuna yhteen olioon, jossa kenttä "parts" sisältää taulukon part-olioista.
2. Korjaa sovellus
    - Huom! Muista, ettei olioita ei voi renderöidä suoraan vaan täytyy viitata sen kenttiin.
3. Kun sovellus taas toimii, etkä näe selaimen konsolissa virheitä, palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 1.6