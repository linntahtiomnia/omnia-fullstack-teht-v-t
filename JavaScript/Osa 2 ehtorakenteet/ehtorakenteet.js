// Ohje: suorita tiedosto komennolla: node ehtorakenteet.js
// Täydennä tehtäväfunktiot ohjeiden mukaan.

const tehtävä1 = () => {
  // Tehtävä 1:
  // Määrittele muuttuja "ikä" ja anna sille jokin lukuarvo.
  // Tee ehtolause:
  // Jos ikä on alle 18 → tulosta: "Olet alaikäinen."
  // Muuten → tulosta: "Olet täysi-ikäinen."
}

const tehtävä2 = (pisteet) => {
  // Tehtävä 2:
  // Funktio saa yhden parametrin "pisteet".
  // Tee ehtorakenne:
  // Jos pisteet >= 50 → tulosta "Läpäisit kokeen!"
  // Muuten → tulosta "Koe ei mennyt läpi."
  // Älä käytä if-lausetta vaan ehto operaattoria '?'
}

const tehtävä3 = (sää) => {
  // Tehtävä 3:
  // Funktio saa parametrin "sää", jonka arvo voi olla esim. "aurinko", "sade" tai "pilvistä".
  // Tee if–else -rakenne:
  // Jos sää == "aurinko" → tulosta "Aurinkoinen päivä!"
  // Jos sää == "sade" → tulosta "Muista sateenvarjo!"
  // Muuten → tulosta "Ihan peruspäivä."
}

const tehtävä4 = (ika, opiskelija) => {
  // Tehtävä 4:
  // Funktio saa kaksi parametria:
  // 1) ikä (numero)
  // 2) opiskelija (boolean true/false)
  //
  // Toteuta ehtolause, joka toimii näin:
  //
  // Jos ikä < 18 → tulosta "Alennus: lapsihinta"
  // Muuten jos opiskelija on true → tulosta "Alennus: opiskelijahinta"
  // Muuten → tulosta "Ei alennusta"
}

const main = () => {
  console.log("Tehtävä 1:")
  tehtävä1()

  console.log("Tehtävä 2: pisteet = 72")
  tehtävä2(72)
  console.log("Tehtävä 2: pisteet = 34")
  tehtävä2(34)

  console.log("Tehtävä 3:")
  tehtävä3("aurinko")
  tehtävä3("sade")
  tehtävä3("sumu")

  console.log("Tehtävä 4:")
  tehtävä5(16, false)
  tehtävä5(25, true)
  tehtävä5(40, false)
}

main()

export default { tehtävä1, tehtävä2, tehtävä3, tehtävä4 }