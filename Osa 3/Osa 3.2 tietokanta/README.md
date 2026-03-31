# Osa 3.2
## Tietokanta
Tässä osassa tutustutaan PostgreSQL-tietokannan käyttöön. Aloitamme ensin tutustumalla pelkkään tietokantaan ja kertaamme samalla SQL:ää, sitten harjoitellaan tietokantaan yhdistämistä JavaScript-sovelluksesta.

Ennen, kun voit tutustua osan esimerkkeihin kunnolla, pitää luoda ja käynnistää tietokanta. Aloita siis tekemällä tehtävä 3.9.
### Tehtävä 3.9 tietokanta osa 1
1. 
2. 

### Esimerkit
Kun olet luonut ja käynnistänyt tietokannan ensimmäisen tehtävän ohjeiden mukaisesti, voit kokeilla *esimerkkiKomennot.sql*-tiedoston komentoja pgAdmin-työkalussa. Tämä esimerkki liittyy tehtävään 3.10

Jos haluat kokeilla *tietokantaEsimerkki.js*-tiedoston sovellusta, seuraa alla olevia ohjeita:
1. navigoi terminaalissa kansioon *tietokantaesimerkki* ja suorita komento **npm i**
2. Lisää *tietokantaesimerkki*-kansioon uusi tiedosto **.env** ja kopioi sinne seuraava rivi, johon muutat merkittyyn kohtaan aiemmin määrittelemäsi tietokannan salasanan:
    ```js
        DATABASE_URL=postgres://postgres:SALASANA@localhost:5432/postgres?sslmode=disable
    ```
    - Älä ikinä lisää .env tidostoa gittiin!
3. Sovelluksen pitäisi nyt käynnistyä komennolla **node tietokantaEsimerkki.js**


## Tehtävät

### Tehtävä 3.10 tietokanta osa 2
Käytä tehtävissä pgAdmin työkalua ja tallenna kaikki komennot *komennot.sql*-tiedostoon.
1. Lisää tietokantaan uusi taulu (eng. table), jonka nimi on persons ja joka sisältää seuraavat kentät:
    - id (uniikki, kasvaa kun lisätään uusia rivejä)
    - name (merkkijono, joka ei voi olla tyhjä)
    - phonenumber (merkkijono, joka ei voi olla tyhjä)
2. Tarkista **\d**-komennolla, että taulu lisättiin tietokantaan
3. Lisää tietokantaa myös ainakin kaksi henkilöä. Tarkista sopivalla SQL-komennolla, että blogit lisättiin tietokantaan.
4. *komennot.sql*-tiedostossa pitäisi olla nyt ainakin 4 SQL-komentoa. Palauta tehtävä tekemällä commit, joka sisältää *komennot.sql*-tiedoston. Älä palauta tietokannan tiedostoja. Lisää commit-viestiin tehtävän numero, eli 3.10
5. Voit halutessasi kokeilla myös muita SQL-komentoja tietokantaan, kuten valita tietyt rivit, muokata jotain riviä jne. Näitä komentoja ei tarvitse laittaa *komennot.sql*-tiedostoon.

### Tehtävä 3.11 tietokansa osa 3
Tehtävässä tehdään yksinkertainen JavaScript koodi, joka avaa yhteyden tietokantaasi ja tulostaa persons-taulusta löytyvät tiedot konsoliin.
1. Lisää kansioon *tietokantatehtävä* uusi tiedosto *.env* ja kopioi sinne seuraava rivi, johon muutat merkittyyn kohtaan aiemmin määrittelemäsi tietokannan salasanan:
    ```js
        DATABASE_URL=postgres://postgres:SALASANA@localhost:5432/postgres?sslmode=disable
    ```
    - Tämä tiedosto on siis identtinen esimerkkiin lisätyn *.env*-tiedoston kanssa. Voit kopioida tämän tiedoston esimerkistä.
    - Älä ikinä lisää .env tidostoa gittiin!
2. Asenna tarvittavat riippuvuudet: navigoi terminaalissa tehtävän kansioon ja suorita komento **npm install express dotenv pg sequelize**
2. Osan kansiossa on *cli.js*-tiedosto, johon on jo tehty tarvittavat importit ja joka avaa yhteyden tietokantaan. Lisää *main*-funktion sisään koodi, joka hakee kaikki blogs-taulusta löytyvät blogit ja tulostaa ne konsoliin järkevässä formaatissa. Tulostus voi näyttää esimerkiksi tältä:
    ```sql
    Executing (default): SELECT * FROM persons
    Dan Abramov 022344777284 
    Matti Luukkainen 227499919374
    ```
    - Pystyt suorittamaan JavaScript koodin komennolla **node cli.js**
    - Listassa pitäisi näkyä edellisessä tehtävässä lisäämäsi puhelinluettelotiedot
2. Tarkista, että tehtävä toimii oikein. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 3.11