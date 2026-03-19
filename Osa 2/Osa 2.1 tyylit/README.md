# Osa 2.1
## Tyylit ja styled-components
Tässä osassa kerrataan CSS:sää ja tutustutaan styled-components kirjastoon. Kansiosta löytyy esimerkkisovellus *tyylitEsimerkki*. Aloita tutustumalla esimerkkisovellukseen. Voit jälleen muokata koodia ja katsoa, mitä muutoksia ne aiheuttavat selaimessa. Tutustu samalla myös selaimen kehittäjän työkalujen elements-osioon ja kokeile muuttaa tyylimäärittelyjä selaimessa.

### Styled-components kirjaston asennus
Esimerkkisovelluksen *package.json* -tiedostossa on jo määritelty, että kun suoritat **npm i** komennon projektin kansiossa, asentuu myös styled-components kirjasto samalla. Jos teet itse uuden projektin, jossa halua käyttää styled-components -kirjastoa (tai mitä tahansa muuta kirjastoa), pitää se ensimmäisellä kerralla asentaa komennolla **npm i styled-components**. Tämä lisää tiedon kirjastosta myös *package.json* -tiedostoon, joten jatkossa **npm i** -komento samassa projektissa asentaa myös styled-components -kirjaston.

## Tehtävät
Tehtävät tehdään tehtavalista-nimiseen projektiin. Projektiin on jo valmiiksi asennettu styled-components -kirjasto, joten riittää, että suoritat komennon **npm i** ennen kuin käynnistät sovelluksen. Älä käytä tekoälyä näihin tehtäviin, ja laita copilotin ehdotukset pois päältä vs codessa. Voit palauttaa kaikki tämän osan tehtävät kerralla.

### Tehtävä 2.1 tehtävälista osa 1
1. Muuta *ListOfCards*-komponenttia siten, että *Card*-komponentit renderöityvät riviin.
    - Vinkki: muuta komponentin div-elementti styled-components -kirjastolla styled.div-elementiksi, jolle lisäät sopivat tyylimäärittelyt
2. Aseta *Card*-komponenttien etäisyydeksi toisistaan 10 pikseliä

### Tehtävä 2.2 tehtävälista osa 2
1. Muuta *Card*-komponenttia siten, että title ja content renderöidään laatikkoon, jonka leveys on 150 pikseliä ja korkeus 200 pikseliä
    - Vinkki: muuta komponentin div-elementti styled-components -kirjastolla styled.div-elementiksi, jolle lisäät sopivat tyylimäärittelyt
2. Lisää laatikon muotoiluun, että sillä on 3 pikselin paksuinen raja, jonka väri on #4e4e4c
3. Aseta rajojen kaarevuussäteeksi (border-radius) 5 pikseliä

### Tehtävä 2.3 tehtävälista osa 3
1. Lisää *Card*-komponentin muotoiluun, että laatikon taustaväri määritellään ehdollisesti: jos card-olion important kentän arvo on true, taustan väri on #FFCC99, jos kentän arvo on false, taustan väri on #B8BEFF
2. Lisää laatikon muotoiluun "padding: 10px;"

### Tehtävä 2.4 tehtävälista osa 4
1. Lisää koko sivulle taustaväri *index.css*-tiedostossa. Saat valita värin itse
2. Lisää koko sovellukselle myös *font-family*-atribuutti ja sille jokin haluamasi arvo

### Bonustehtävä 2.5 tehtävälista osa 5
1. Muuta *Card*-komponenttia siten, että title renderöidään sivusuunnassa laatikon keskelle, mutta content pysyy paikallaan
    -Vinkki: joudut lisäämään uusia elementtejä komponenttiin

Muista palauttaa tehtävät nyt, jos et ole palauttanut niitä yksitellen. Palaute tekemällä commit. Lisää commit viestiin tehtävän tai osan numero (osa 2.1)