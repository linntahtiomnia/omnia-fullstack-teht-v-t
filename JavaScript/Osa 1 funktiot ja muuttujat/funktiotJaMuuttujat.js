// Ohje: voit suorittaa tiedoston komennolla node funktiotJaMuuttujat.js
// tiedoston alaosassa on main-funktio, joka suorittaa kaikki tehtäväfunktiot.
// Täydennä tehtäväfunktiot ohjeiden mukaan.
// Kansiossa on myös testit, joilla voit tarkistaa tehtävät. Suorita testit komennolla:


const tehtävä1 = () => {
    // Tehtävä 1: 
    // Tässä funktiossa pitää
    // 1) Määrittellä muuttuja nimeltä numero ja anna sen arvoksi luku 5.
    // 2) Tulostaa muuttujan arvo konsoliin käyttäen console.log komentoa. 
    // 3) Muuttaa saman muuttujan arvoksi luku 4.
    // 4) Tehdä toinen tulostus käyttäen console.log komentoa.
    // Mieti, pitääkö muuttuja määritellä avainsanalla const vai let



}

const tehtävä2 = () => {
    const päivät = 2
    const kuukaudet = 5

    // Tehtävä 2: yllä on määritelty kaksi kokonaislukumuuttujaa "päivät" ja "kuukaudet".
    // Käytä console.log-komentoa ja tulosta lause "Tänään on 2 päivää ja 5 kuukautta yllätyspäivään!"
    // Käytä tulostuksessa yllä olevia muuttujia. Pelkkä lauseen kopiointi console.log-komentoon ei riitä.


}


const tehtävä3 = (luku1, luku2) => {
    // Tehtävä 3: Tämä funktio saa kaksi parametria: "luku1" ja "luku2"
    // Tulosta lukujen summa, erotus ja tulo käyttäen console.log-komentoa.
    // Esimerkki tulostus: "Lukujen summa on 6."


}

const tehtävä4 = (suoritetutPisteet, tavoite) => {
    // Tehtävä 4: Tämä funktio saa kaksi parametria: "suoritetutPisteet" ja "tavoite".
    // Sinun täytyy laskea, kuinka monta pistettä puuttuu, että tavoite olisi saavutettu.
    // Tulosta vastaus console.log-komennolla muodossa "Tavoitteesta puuttuu x pistettä", missä
    // x korvataan puuttuvalla pistemäärällä.



}


// Tee tähän oma funktiosi tehtävään 5


const tehtävä5 = () => {
    // Tehtävä 5: Määrittele tämän funktion yläpuolelle uusi funktio, jonka nimi on "kertoLasku".
    // Funktion pitää ottaa kaksi parametria "luku1" ja "luku2" ja laskea näiden lukujen kertolasku.
    // Funktion pitää palauttaa lasketun kertolaskun tulos.
    // Kutsu funktiota tästä funktiosta antaen parametrien arvoiksi luvut 8 ja 6. Tulosta funktion palauttama
    // arvo tässä funktiossa komennolla console.log()

}


const main = () => {
    console.log("Tehtävä 1:")
    tehtävä1()
    console.log("Tehtävä 2:")
    tehtävä2()
    console.log("Tehtävä 3: luku1=8 ja luku2=5")
    tehtävä3(8, 5)
    console.log("Tehtävä 3: luku1=4 ja luku2=7")
    tehtävä3(4, 7)
    console.log("Tehtävä 4: suoritetutPisteet=8 ja tavoite=20")
    tehtävä4(8, 20)
    console.log("Tehtävä 5:")
    tehtävä5()
}

main()

export default { tehtävä1, tehtävä2, tehtävä3, tehtävä4 }
