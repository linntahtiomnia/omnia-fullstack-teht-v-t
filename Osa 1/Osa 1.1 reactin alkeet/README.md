# Osa 1.1
## Reactin alkeet
Tämän osion tehtävissä harjoitellaan aivan reactin alkeita ja opitaan, mitä komponentit ovat. Aloita tutustumalla *esimerkkiProjekti*-kansiosta löytyvään esimerkkiin. Käynnistä esimerkki projekti ja kokeile muuttaa koodia. Pidä koko ajan auki sekä koodieditori, että selain, jossa on myös konsoli avoinna. Tarkastele, miten koodimuutokset vaikuttavat näkyvät selaimessa avatussa sovelluksessa.

Varmista, että ymmärrät seuraavat käsitteeet ja miten niitä käytetään: *komponentti*, *props*, *console.log/loggaus*

Tämän osion tehtäviin on valmiit pohjat kansioissa *helloWorld* ja *kurssitiedot*. Tehtävien kannalta oleellinen tiedosto on nimeltään *App.jsx*. Se löytyy projekti hakemistosta (=kansiosta) *src*-kansiosta. Alta löytyy ohjeet React-sovelluksen käynnistämiseen. 

## Näin käynnistät react-sovelluksen:
1. Avaa terminaali esim. visual studio kodessa näppäimillä ctrl+ö
2. Navigoi komentorivillä oikeaan kansioon cd-komennolla
    - Esim. **cd '.\Osa 1\Osa 1.1 reactin alkeet\helloWorld'**
3. Suorita komento **npm i**
    - i on lyhenne sanalle install. Myös komento **npm install** toimii. Tämä komento asentaa kaikki tarvittavat riippuvuudet kansiosta löytyvän *package.json*-tiedoston mukaisesti.
4. Suorita komento **npm run dev**
    - Tämä komento käynnistää sovelluksen. Pystyt nyt avaamaan sen selaimessa.
5. Kun haluat pysäyttää sovelluksen, klikkaa komentoriviä ja paina näppäinyhdistelmää ctrl+C

## Tehtävät:
### Tehtävä 1.1 Hello world!

1. Käynnistä *Osa 1.1 reactin alkeet*-kansiosta valmiiksi löytyvä helloWorld sovellus ja avaa se selaimessa
    - Huom. tässä kohtaa sivun pitäit näyttää vain valkoiselta, mutta konsolissa pitäisi näkyä loggaus
2. Muuta *App.jsx* tiedostosta löytyvää *App*-komponenttia siten, että se renderöi tekstin **Hello World!** h1-elementin sisälle
3. Varmista, että teksti näkyy oikein selaimessa ja tee commit. Lisää commit viestiin tehtävän numero, eli 1.1
    - Muista myös pushata muutokset, jotta ne tulevat näkyviin githubiin!

### Tehtävä 1.2 Hello world -komponentti

1. Tehtävässä jatketaan samaa helloWorld-sovellusta. Varmista, että se on edelleen käynnissä ja auki selaimessa.
2. Lisää **App.jsx**-tiedostoon uusi komponentti ja anna sen nimeksi *EkaKomponentti*. Komponentin tulee ottaa yksi propsi, jonka nimi on *viesti*. Komponentin tulee renderöidä viestin sisältö p-elementissä.
3. Renderöi tekemäsi *EkaKomponentti* App-komponentissa Hello World tekstin alapuolella. Voit itse valita sisällön *viesti*-propsille.
    - *viesti*-propsin arvoksi voi laittaa esimerkiksi "Ensimmäinen propsi"
4. Varmista selaimesta, että tekemäsi komponentti renderöidään oikein, ja ettei konsolissa näy virheitä.
5. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero eli 1.2
    - Muista myös pushata muutokset, jotta ne tulevat näkyviin githubiin!


### Tehtävä 1.3


### Tehtävä 1.4