// Ohje: suorita tiedosto komennolla: node kokoelmat.js
// Täydennä tehtäväfunktiot ohjeiden mukaan.


const tehtävä1 = () => {
    // Tehtävä 1:
    // Tallenna muuttujaan "luvut" taulukko, jossa on viisi eri lukua: 3, 6, 1, 2, 7.
    // Tulosta erillisillä console.log-komennoilla:
    // 1. koko taulukko
    // 2. taulukon ensimmäinen arvo
    // 3. ensimmäinen arvo, joka on suurempi kuin 4 (käytä find-metodia)

}



const tehtävä2 = () => {
    // Tehtävä 2:
    // Tallenna muuttujaan "kaupungit" taulukko, joka sisältää merkkijonot: "Tampere", "Turku", "Oulu".
    // Vaihda taulukon keskimmäinen kaupunki ("Turku") uuteen arvoon "Espoo".
    // Tulosta taulukko.

}


const tehtävä3 = (opiskelijat) => {
    // Tehtävä 3:
    // Funktio saa parametrina taulukon "opiskelijat", joka sisältää opiskelija-olioita.
    // Opiskelija-olio sisältää kenät nimi (merkkijono) ja arvosana (kokonaisluku). Käytä find-metodia
    // ja etsi taulukosta olio, jonka nimi kentässä on arvo "Mikko". Tulosta Mikon arvosana console.log-komennolla.
}


const tehtävä4 = () => {
    // Tehtävä 4:
    // Luo taulukko "ostokset", jossa on olioita:
    // { tuote: "Maito", hinta: 2 }
    // { tuote: "Leipä", hinta: 3 }
    // { tuote: "Juusto", hinta: 5 }
    //
    // Käytä filter metodia, ja etsi kaikki tuotteet, joiden hinta on pienempi kuin 4.
    // Tulosta näiden tuotteiden nimet. Käytä esimerkiksi forEach-metodia.
}


const main = () => {
    console.log("Tehtävä 1:")
    tehtävä1()

    console.log("Tehtävä 2:")
    tehtävä2()

    console.log("Tehtävä 3:")
    const opiskelijat = [
        { nimi: "Liisa", arvosana: 2 },
        { nimi: "Pekka", arvosana: 3 },
        { nimi: "Mikko", arvosana: 4 },
        { nimi: "Minttu", arvosana: 4 }
    ]
    tehtävä3(opiskelijat)

    console.log("Tehtävä 4:")
    tehtävä4()

}

main()

export default { tehtävä1, tehtävä2, tehtävä3, tehtävä4 }