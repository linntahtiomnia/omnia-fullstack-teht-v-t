// Ohje: suorita tiedosto komennolla: node oliot.js
// Täydennä tehtäväfunktiot ohjeiden mukaan.

const tehtävä1 = () => {
    // Tehtävä 1:
    // 1) Tallenna muuttujaan "henkilo" olio, jossa on ominaisuudet:
    //    nimi (merkkijono) ja ikä (numero)
    // 2) Tulosta molemmat ominaisuudet console.log-komennolla muodossa:
    // "Henkilön nimi on x ja hän on x vuotta vanha"

}



const tehtävä2 = () => {
    // Tehtävä 2:
    // Tallenna muuttujaan "auto" olio, jossa on:
    // - merkki
    // - malli
    // - vuosimalli
    //
    // Tulosta console.log -komennolla:
    // "Auto: MERKKI MALLI (VUOSIMALLI)"
}


const tehtävä3 = (opiskelija) => {
    // Tehtävä 3:
    // Parametrina tulee olio, esim:
    // { nimi: "Mikko", kurssi: "Ohjelmointi 1", arvosana: 4 }
    // Käytä ehtorakennetta: Jos arvosanan arvo on suurempi tai yhtäsuuri kuin 3, tulosta console.log -
    // komennolla lause "NIMI on suorittanut kurssin KURSSI hyvällä arvosanalla"
    // Jos arvosanan arvo on pienempi kuin kolme tulosta "NIMI on suorittanut kurssin KURSSI"


}

const tehtävä4 = () => {
    // Tehtävä 4:
    // Luo olio "kauppa", jossa on:
    // - nimi
    // - osoite
    // - auki (boolean)
    //
    // Tee if-rakenne:
    // Jos kauppa.auki === true → tulosta "Kauppa on auki"
    // Muuten → tulosta "Kauppa on kiinni"
}

const lisääIkä = (henkilo) => {
    // Tämä funktio:
    // - kasvattaa olion "henkilo" ikää yhdellä
    // - palauttaa päivitetyn olion
}

const tehtävä5 = () => {
    // Tehtävä 5:
    // 1) Tallenna muuttujaan "henkilo" olio, jolla on seuraavat kentät: { nimi: "Teemu", ikä: 19 }
    // 2) Kutsu lisääIkä-funktiota siten, että annat sille parametrina tekemäsi olion.
    // 3) Täydennä funktiota lisääIkä kommentoitujen ohjeiden mukaan
    // 4) Tulosta tässä funktiossa palautetun olion tiedot tässä muodossa "NIMI ikä on nyt IKÄ vuotta"

}


const main = () => {
    console.log("Tehtävä 1:")
    tehtävä1()

    console.log("Tehtävä 2:")
    tehtävä2()

    console.log("Tehtävä 3:")
    tehtävä3({ nimi: "Lumi", kurssi: "Web-ohjelmointi", arvosana: 5 })
    tehtävä3({ nimi: "Kaisa", kurssi: "Palvelinohjelmointi", arvosana: 2 })
    tehtävä3({ nimi: "Mikko", kurssi: "Tietokannat", arvosana: 3 })

    console.log("Tehtävä 4:")
    tehtävä4()

    console.log("Tehtävä 5:")
    tehtävä5()
}

main()

export default { tehtävä1, tehtävä2, tehtävä3, tehtävä4, tehtävä5 }