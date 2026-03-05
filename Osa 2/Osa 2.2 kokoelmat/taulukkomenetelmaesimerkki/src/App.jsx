// VegetableApp.jsx

const Header = ({ title }) => {
  // Header-komponentti, joka vastaanottaa title-propin ja renderöi sen h1-elementtinä
  return <h1>{title}</h1>;
};

const Vegetable = ({ vegetable }) => {
  // Vegetable-komponentti, joka vastaanottaa vegetable propin, joka on olio.
  //  Se renderöi kasviksen nimen ja määrän p-elementtinä.
  return (
    <p>
      {vegetable.name}: {vegetable.quantity} kpl
    </p>
  );
};

const VegetableList = ({ items }) => {
  // VegetableList-komponentti, joka vastaanottaa items-propin, joka on taulukko kasvisolioita.
  // Se renderöi jokaisen kasviksen Vegetable-komponenttina käyttäen map-metodia.
  // Huomaa, että jokaiselle renderöitävälle komponentille täytyy antaa uniikki key-prop, joka 
  // tässä tapauksessa on kasviksen nimi.
  return (
    <div>
      {items.map(vegetable => <Vegetable key={vegetable.name} vegetable={vegetable} />)}
    </div>
  );
};

const Total = ({ items }) => {
  // Total-komponentti, joka vastaanottaa items-propin, joka on taulukko kasvisolioita.
  // Se laskee kaikkien kasviksen määrän yhteen ja renderöi sen p-elementtinä.
  // Summa lasketaan käyttämällä reduce-metodia. Reduce-metodi ottaa parametrina nuolifunktion, jonka ensimmäinen parametri
  // on ns. akkumulaattori (tässä total), joka saa jokaisella iteraatiolla arvokseen edellisen iteraation palauttaman arvon.
  // Ensimmäisellä iteraatiolla akkumulaattorin arvo on reduce-metodin toinen argumentti, eli tässä 0.
  // Nuolifunktion toinen parametri on taulukon alkio, eli tässä tapauksessa kasviolio.
  // Tämä nuolifunktio siis lisää akkumulaattorin (total) arvoon kasviksen määrän (vegetable.quantity) 
  // ja palauttaa sen, jolloin se on seuraavan iteraation akkumulaattorin arvo.
  // Viimeisen iteraation jälkeen akkumulaattorin arvo palautetaan ja tallennetaan muuttujaan sum.
  const sum = items.reduce((total, vegetable) => total + vegetable.quantity, 0);
  return <p><strong>Yhteensä: {sum} kpl</strong></p>;
};

const ShowPotatoQuantity = ({ items }) => {
  // ShowPotatoQuantity-komponentti, joka vastaanottaa items-propin, joka on taulukko kasvisolioita.
  // Se tarkistaa, onko taulukossa perunaa ja renderöi niiden määrän p-elementtinä, jos peruna löytyy.
  // find-metodi hakee taulukosta ensimmäisen alkion, joka täyttää sille annetun ehdon. Tässä tapauksessa ehto on, että kasviksen nimi on "Peruna".
  // Jos find-metodi löytää taulukosta alkion, joka täyttää ehdon, se palauttaa sen. Muussa tapauksessa se palauttaa undefined.
  const potato = items.find(vegetable => vegetable.name === "Peruna");

  if (potato) {
    return <p>Peruna löytyy varastosta: {potato.quantity} kpl</p>;
  } else {
    return <p>Perunaa ei löydy varastosta</p>;
  }
};

const App = () => {
  // vegetableData-olio, joka sisältää title-kentän ja items-kentän.
  // title-kenttä on merkkijono
  // items-kenttä on taulukko, joka sisältää kasvisoliota. Jokaisella kasvisoliolla
  //  on name-kenttä ja quantity-kenttä.
  const vegetableData = {
    title: "Kasvisvaraston tilanne",
    items: [
      { name: "Peruna", quantity: 12 },
      { name: "Porkkana", quantity: 7 },
      { name: "Sipuli", quantity: 5 }
    ]
  };

  // Huomaa, miten propsin nimen ei tarvitse olla sama kuin sille annettavan arvon nimi.
  // Esimerkiksi Header-komponentti vastaanottaa title-propin, mutta App-komponentti antaa
  // sille arvon vegetableData.title.

  // Komponenttien sisällö täytyy kuitenkin viitata propin nimeen, ei siihen, mitä arvo on. 
  // Vertaa tätä tavallisiin funktioihin ja niiden argumentteihin esimerkiksi Pythonissa.
  return (
    <div>
      <Header title={vegetableData.title} />
      <VegetableList items={vegetableData.items} />
      <Total items={vegetableData.items} />
      <ShowPotatoQuantity items={vegetableData.items} />
    </div>
  );
};

export default App;