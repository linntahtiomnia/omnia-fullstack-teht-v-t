import { useState } from 'react'

const App = () => {
  // Määritellään tilamuuttuja value ja funktio setValue, jolla tilaa voidaan muuttaa
  // Määrittely tehdään useState-hookilla, joka saa argumentikseen tilan alkuarvon (tässä tapauksessa 0)
  // Hookit ovat erityisiä funktioita Reactissa, jotka mahdollistavat tilan ja muiden React-ominaisuuksien käytön.
  // Hookeja voidaan käyttää vain funktiokomponenteissa, eikä niitä saa kutsua silmukoiden, ehtolauseiden tai sisäkkäisten funktioiden sisällä.
  const [value, setValue] = useState(0)

  // setToValue on funktio, jota käytetään nappien onClick-tapahtumankäsittelijöissä. 
  // Se ottaa argumentikseen uuden arvon, joka asetetaan tilamuuttujaan value.
  const setToValue = (newValue) => {
    // Uusi arvo tulostetaan konsoliin. 
    // Tämä on hyödyllistä debuggaamiseen, jotta näemme, mikä arvo asetetaan tilaan.
    console.log('value now', newValue)
    // Tilamuuttujaan value asetetaan uusi arvo newValue, joka saadaan funktiokutsusta.
    // Tilan päivittäminen aiheuttaa komponentin uudelleenrenderöinnin, jolloin uusi arvo näkyy selaimessa.
    setValue(newValue)
  }

  // Tämä komponentti renderöi otsikon "Counter", tilamuuttujan value ja kolme nappia, 
  // joilla on erilaiset tapahtumankäsittelijät.
  // Jokaisella napilla on onClick-tapahtumankäsittelijä, joka kutsuu setToValue-funktiota eri argumenteilla:
  // - Ensimmäinen nappi asettaa tilan arvoon 1000.
  // - Toinen nappi nollaa tilan arvon.
  // - Kolmas nappi kasvattaa tilan arvoa yhdellä.
  return (
    <>
      <h1>Counter</h1>
      <div>{value}</div>
      <div>
        <button onClick={() => setToValue(1000)}>
          thousand
        </button>
        <button onClick={() => setToValue(0)}>
          reset
        </button>
        <button onClick={() => setToValue(value + 1)}>
          increment
        </button>
      </div>
    </>
  )
}

export default App