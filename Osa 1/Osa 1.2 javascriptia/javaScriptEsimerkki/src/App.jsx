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
  //  Se renderöi jokaisen kasviksen Vegetable-komponenttina.
  return (
    <div>
      <Vegetable vegetable={items[0]} />
      <Vegetable vegetable={items[1]} />
      <Vegetable vegetable={items[2]} />
    </div>
  );
};

const Total = ({ items }) => {
  // Total-komponentti, joka vastaanottaa items-propin, joka on taulukko kasvisolioita.
  //  Se laskee kaikkien kasviksen määrän yhteen ja renderöi sen p-elementtinä.
  const sum = items[0].quantity + items[1].quantity + items[2].quantity;
  return <p><strong>Yhteensä: {sum} kpl</strong></p>;
};

const App = () => {
  // vegetableData-olio, joka sisältää title-kentän ja items-kentän.
  // title-kenttä on merkkijono
  // items-kenttä on taulukko, joka sisältää kolme kasvisoliota. Jokaisella kasvisoliolla
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
    </div>
  );
};

export default App;