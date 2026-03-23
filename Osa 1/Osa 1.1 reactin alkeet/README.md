# Osa 1.1
## Reactin alkeet
Tämän osion tehtävissä harjoitellaan aivan reactin alkeita ja opitaan, mitä komponentit ovat. Aloita tutustumalla *esimerkkiProjekti*-kansiosta löytyvään esimerkkiin. Käynnistä esimerkki projekti ja kokeile muuttaa koodia. Pidä koko ajan auki sekä koodieditori, että selain, jossa on myös konsoli avoinna. Tarkastele, miten koodimuutokset vaikuttavat näkyvät selaimessa avatussa sovelluksessa.

Varmista, että ymmärrät seuraavat käsitteeet ja miten niitä käytetään: *komponentti*, *props*, *console.log/loggaus* ja *renderöinti*

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
4. Varmista selaimesta, että tekemäsi komponentti renderöidään oikein, ja ettei konsolissa näy virheitä. Tiedoton lopussa on kommentoitu EkaKomponentti-komponentin exporttaus. Poista kommentointi tältä riviltä, jotta testit toimii oikein.
5. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero eli 1.2
    - Muista myös pushata muutokset, jotta ne tulevat näkyviin githubiin!


### Tehtävä 1.3 Kurssitiedot osa 1
Tässä tehtävässä refaktoroidaan koodia. Refaktorointi tarkoittaa koodin muokkaamista ilman, että toiminnallisuus muuttuu. Tämä voi tarkoittaa esimerkiksi ison komponentin jakamista useiksi pieniksi komponenteiksi. 

Tehtävät tehdään *Osa 1.1 reactin alkeet*-kansiosta valmiiksi löytyvään *kurssitiedot* sovellukseen.

**App.jsx**-tiedostosta löytyy *App*-komponentti, jossa on tallennettu muuttujiin kurssiin liittyviä tietoja. Kurssin tiedot renderöidään tällä hetkellä suoraan *App*-komponentissa. Tehtävän tavoitteena on siirtää renderöinti *App*-komponentista uusiin pienempiin komponentteihin. Alla näkyy vasemmalla *App*-komponentin tämän hetkinen palautettava jsx-koodi, ja oikealla, miltä sen tulee näyttää tehtävän jälkeen:

<table>
<tr>
<td>

```jsx
return (
  <div>
    <h1>{course}</h1>
    <Part part={part1} exercises={exercises1} />
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </div>
)
```

</td>
<td>

```jsx
return (
  <div>
    <Header course={course} />
    <Part ... />
    <Part ... />
    <Part ... />
    <Total ... />
  </div>
)
```

</td>
</tr>
</table>

Huomaa, että esimerkkikoodin kolme pistettä tarkoittavat, että niiden paikalle tulee jotain koodia. Älä siis itse laita koodiisi kolmea pistettä, tai kopioi esimerkkiä suoraan omaan koodiisi!

Samasta tiedostosta löytyy myös sinulle valmiiksi tehty *Part*-komponentti, jota käytetään jo yhden kurssin osan renderöintiin.


1. Sammuta *helloWorld*-sovellus ja käynnistä *kurssitiedot*. Varmista, että *kurssitiedot*-sovellus näkyy selaimessa. Pidä selaimen konsoli auki koko ajan.
2. Aloita muuttamalla myös kahden muun kurssin osan renderöinti *Part*-komponenttiin. Katso mallia valmiiksi tehdystä osasta. Varmista, että sivu näyttää selaimessa täysin samalta kuin aiemmin, ja ettei konsolissa näy virheitä.
3. Tee samaan tiedostoon uusi komponentti *Header*, joka ottaa yhden propsin *course*. Komponentin tulee renderöidä *course*-propsin sisältö h1-elementtiin. Muuta *App*-komponenttia siten, että kurssin nimen renderöinti tehdään *Header*-komponentin avulla. Varmista, että sivu näyttää selaimessa täysin samalta kuin aiemmin, ja ettei konsolissa näy virheitä.
4. Tee samaan tiedostoon uusi komponentti *Total*, joka ottaa yhden propsin *total*. Komponentin tulee renderöidä p-elementissä teksti "Number of exercises" sekä *total*-propsin arvo. Muuta *App*-komponenttia siten, että tehtävien kokonaismäärä renderöidään *Total*-komponentin avulla. Varmista, että sivu näyttää selaimessa täysin samalta kuin aiemmin, ja ettei konsolissa näy virheitä.
5. Tarkista, että *App*-komponenttisi näyttää samalta kuin ylempänä oleva malli. Poista tiedoston lopusta tekemiesi komponenttien exporttauksen kommentointi, jotta testit toimivat oikein. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 1.3


### Tehtävä 1.4 Kurssitiedot osa 2
Tässä tehtävässä jatketaan saman kurssitiedot-sovelluksen refaktorointia. Tässä kertaa tavoite on muuttaa *App*-komponentin palauttama JSX-koodi seuraavaan muotoon:

```jsx
return (
  <div>
    <Header course={course} />
    <Content ... />
    <Total ... />
  </div>
)
```
eli siirtää *Part*-komponenttien renderöinti uuden *Content*-komponentin sisään.

1. Tee edelleen samaan tiedostoon uusi komponentti *Content*, joka ottaa kuusi propsia. Propsit ovat kolmen eri kurssin osan nimet ja tehtävien määrät (eli part1, part2... ja exercises1...)
2. *Content*-komponentin tulee renderöidä kolme *Part*-komponenttia, joista kukin saa propsina yhden kurssin osan tiedot
3. Muuta *App*-komponenttia siten, että se renderöi kolmen *Part*-komponentin sijaan vain yhden *Content*-komponentin. Varmista, että sivu näyttää selaimessa täysin samalta kuin aiemmin, ja ettei konsolissa näy virheitä.
4. Tarkista, että *App*-komponenttisi näyttää samalta kuin ylempänä oleva malli. Poista tiedoston lopusta Content-komponentin exporttauksen kommentointi, jotta testit toimivat oikein. Palauta tehtävä tekemällä commit. Lisää commit-viestiin tehtävän numero, eli 1.4