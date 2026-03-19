import { useState } from 'react'
import styled from 'styled-components'

const App = () => {
  // tila, joka kertoo, korostetaanko vasenta vai oikeaa palkkia. Tila annetaan propsina
  // Column-komponentille, joka määrittelee palkkien tyylit. Näin palkkien taustaväri riippuu siitä, 
  // onko palkki korostettu vai ei.
  const [highlightLeft, setHighlightLeft] = useState(true)

  const handleToggle = () => {
    setHighlightLeft((prev) => !prev)
  }

  // Lähes kaikki App-komponentin elementit on määritelty styled-components-kirjastolla.
  // Tämä tarkoittaa, että elementtien tyylit on määritelty suoraan JavaScript-koodissa, eikä erillisessä CSS-tiedostossa.
  // Tyylien määrittelyt löytyvät tämän tiedoston lopusta.

  // Sovellukselle on määritelty joitain globaaleja tyylejä myös index.css-tiedostossa, joka on otettu käyttöön main.jsx-tiedostossa
  // Elementtien tyylit on kuitenkin järkevämpää määritellä komponenttikohtaisesti jsx-tiedostossa.
  return (
      <PageContainer>
        <Container>
          <Row>
            <Column $highlighted={highlightLeft}>
              <ColumnTitle>Vasen palkki</ColumnTitle>
              <p>Tässä voi olla mitä tahansa sisältöä.</p>
            </Column>
            <Column $highlighted={!highlightLeft}>
              <ColumnTitle>Oikea palkki</ColumnTitle>
              <p>Myös tässä voi olla tekstiä, kuva tms.</p>
            </Column>
          </Row>

          <Button onClick={handleToggle}>
            {highlightLeft ? 'Korosta oikeaa palkkia' : 'Korosta vasenta palkkia'}
          </Button>
        </Container>
      </PageContainer>
  )
}

// Alta löytyy kaikkien tyyliteltyjen elementtien määrittelyt. Näitä elementtejä voi uudelleen käyttää,
// kuten Column-komponentti, joka on määritelty vain kerran, mutta sitä käytetään kahdesti App-komponentin JSX-koodissa.
// Kokeile vaihtaa tyylejä, ja katsoa mitä sovellukselle tapahtuu.


// Div-elementti, jonka sisältö keskitetään sekä vaaka- että pystysuunnassa
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

// Div-elementti, joka toimii palkkien ja napin säiliönä
// Elementille on määritelty mm. maksimileveys, jotta se ei veny liian leveäksi isoilla näytöillä
// Lisäksi elementti on asetettu grid-kontaineriksi, jotta sen lapsielementit (Row ja Button) 
// asettuvat omille riveilleen
const Container = styled.div`
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  display: grid;
`;

// Div-elementti, joka asettaa lapsielementit vierekkäin riviin
// gap-ominaisuudella määritellään lapsielementtien väliin jäävä rako
// margin-bottom-ominaisuudella määritellään alaosan marginaali, joka erottaa rivin napista
const Row = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

// Yksi palkki. Div-elementille on määritelty mm. taustaväri, joka riippuu "highlighted"-propista
// Tyylejä voi siis määritellä myös ehdollisesti.
// Lisäksi elementti on asetettu flex-kontaineriksi, jotta sen lapsielementit (otsikko ja teksti)
// asettuvat pystysuunnassa ja niiden väliin jää tilaa
const Column = styled.div`
  flex: 1;
  height: 120px;
  border-radius: 8px;
  padding: 0.75rem;

  /* taustaväri riippuu "highlighted"-propista */
  background: ${({ $highlighted }) => ($highlighted ? '#b4d2f8' : '#e5e7eb')};
  color: #111827;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Otsikko palkin sisällä
const ColumnTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`;

// Nappi, jolle on määritelty mm. pyöristetyt reunat, taustaväri ja hover-efekti
const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: #4f46e5;
  color: white;
  font-weight: 600;

  &:hover {
    background: #4338ca;
  }
`;

export default App
