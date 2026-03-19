// Tämä tiedosto sisältää esimerkin ja 6 tehtävää. Jokaista tehtävää varten on oma funktionsa, 
// joita kutsutaan tiedoston lopussa. Näet terminaalista omat vastauksesi ja oikeat vastaukset.
// Pystyt suorittamaan tiedoston komennolla "node javaScriptRakenteet.js"

const esimerkki = () => {
    console.log("Esimerkki");

    // Esimerkki: Tee map-metodillataulukosta uusi taulukko, jossa kaikki luvut on kerrottu kahdella.
    // Tulosta uusi taulukko konsoliin.
    const taulukko = [2, 6, 3, 8, 4];

    const uusiTaulukko = taulukko.map(luku => luku * 2);
    console.log(`Sinun vastaus: ${uusiTaulukko}`);
    console.log("Oikea vastaus: [4, 12, 6, 16, 8]");

}

const tehtava1 = () => {
    console.log("Tehtävä 1");
    // Tehtävä 1: Tee map-metodilla taulukosta uusi taulukko, jossa kaikkiin lukuihin on lisätty 2.
    // Tulosta uusi taulukko konsoliin.
    const taulukko = [2, 6, 3, 8, 4];


    const uusiTaulukko = []; // muuta tätä riviä

    console.log(`Sinun vastaus: ${uusiTaulukko}`);
    console.log("Oikea vastaus: 4,8,5,10,6");
}

const tehtava2 = () => {
    console.log("Tehtävä 2");
    // Tehtävä 2: Tee filter-metodilla taulukosta uusi taulukko, 
    // jossa on vain ne luvut, jotka ovat suurempia kuin 4.
    const taulukko = [2, 6, 3, 8, 4];

    const uusiTaulukko = []; // muuta tätä riviä
    console.log(`Sinun vastaus: ${uusiTaulukko}`);
    console.log("Oikea vastaus: 6,8");
}


const tehtava3 = () => {
    console.log("Tehtävä 3");
    // Tehtävä 3: Tee reduce-metodilla taulukosta luku, joka on kaikkien lukujen summa.
    const taulukko = [2, 6, 3, 8, 4];

    const summa = 0; // muuta tätä riviä
    console.log(`Sinun vastaus: ${summa}`);
    console.log("Oikea vastaus: 23");
}

const tehtava4 = () => {
    console.log("Tehtävä 4");
    // Tehtävä 4: Tee find-metodilla taulukosta olio, jonka nimi on "Matti". Tulosta olio konsoliin.
    const taulukko = [
        { nimi: "Matti", ika: 30 },
        { nimi: "Maija", ika: 25 },
        { nimi: "Pekka", ika: 35 }
    ];

    const matti = null; // muuta tätä riviä
    console.log(`Sinun vastaus: ${JSON.stringify(matti)}`);
    console.log("Oikea vastaus: {\"nimi\":'Matti',\"ika\":30}");
}


const tehtava5 = () => {
    console.log("Tehtävä 5");
    // Tehtävä 5: Tee map-metodilla taulukosta uusi taulukko, jossa on vain olioiden nimet. 
    // Tulosta uusi taulukko konsoliin.

    const taulukko = [
        { nimi: "Matti", ika: 30 },
        { nimi: "Maija", ika: 25 },
        { nimi: "Pekka", ika: 35 }
    ];

    const nimet = []; // muuta tätä riviä
    console.log(`Sinun vastaus: ${JSON.stringify(nimet)}`);
    console.log("Oikea vastaus: [\"Matti\",\"Maija\",\"Pekka\"]");
}

const tehtävä6 = () => {
    console.log("Tehtävä 6");
    // Tehtävä 6: Tee filter-metodilla taulukosta uusi taulukko, jossa on vain ne oliot, 
    // joiden ikä on suurempi kuin 30. 
    // Tulosta uusi taulukko konsoliin.
    const taulukko = [
        { nimi: "Matti", ika: 30 },
        { nimi: "Maija", ika: 25 },
        { nimi: "Pekka", ika: 35 }
    ];

    const uusiTaulukko = []; // muuta tätä riviä
    console.log(`Sinun vastaus: ${JSON.stringify(uusiTaulukko)}`);
    console.log("Oikea vastaus: [{\"nimi\":\"Matti\",\"ika\":30},{\"nimi\":\"Pekka\",\"ika\":35}]");
}

esimerkki();
tehtava1();
tehtava2();
tehtava3();
tehtava4();
tehtava5();
tehtävä6();