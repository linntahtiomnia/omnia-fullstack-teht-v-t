// Tutustu komponentteihin ja propsien käyttöön Reactissa. 
// Tässä esimerkissä luodaan kaksi komponenttia: Otsikko ja Alaotsikko. 
// Otsikko-komponentti saa propsina teksti, joka renderöidään h1-elementtiin, kun taas 
// Alaotsikko-komponentti renderöi kiinteän alaotsikon ilman propsia. 
// 
// Pääkomponentti App renderöi molemmat komponentit ja lisää kappaleen,
//  joka selittää mitä on tapahtunut.
//
// Voit kokeilla muuttaa koodia ja nähdä, miten se vaikuttaa renderöityyn sisältöön.
// Ohjeet sovelluksen käynnistämiseen:
// 1. Navigoi terminaalissa projektikansioon, eli kansioon esimerkkiProjekti.
// 2. Asenna riippuvuudet komennolla: npm i
// 3. Käynnistä sovellus komennolla: npm run dev
// Sovelluksen pitäisi avautua selaimessa osoitteessa http://localhost:5173/

const Otsikko = ({ teksti }) => {
  // Komponentti saa propsin "teksti", joka renderöidään h1-elementtiin
  return (
    <h1>{teksti}</h1>
  )
}

const Alaotsikko = () => {
  // Tämä komponentti ei saa propsia, vaan renderöi kiinteän alaotsikon
  
  // console.log-komennolla voidaan logata tietoa selaimen konsoliin.
  // Loggauksia kannattaa käyttää varsinkin alussa paljon. Ne usein auttavat ymmärtämään,
  // mitä sovelluksessa tapahtuu ja missä vaiheessa. Voit verrata loggausta pythonin print-komentoon.
  console.log('Alaotsikko-komponentti renderöityy')
  return (
    <h2>alaotsikko</h2>
  )
}

const App = () => {
  // Pääkomponentti App renderöi Otsikko- ja Alaotsikko-komponentit
  // Otsikko-komponentille annetaan propsina teksti "Otsikko"
  // Komponentit renderöidään div-elementin sisälle, 
  // ja niiden jälkeen on p-elementti, joka selittää mitä on tapahtunut
  return (
    <div>
      <Otsikko teksti="Otsikko" />
      <Alaotsikko />
      <p>Yllä olevat tekstit ovat renderöity erillisillä komponenteilla</p>
    </div>
  )
}

export default App