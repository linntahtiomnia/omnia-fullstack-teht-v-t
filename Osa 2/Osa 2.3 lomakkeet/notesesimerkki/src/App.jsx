import { useState } from 'react'

// Note-komponentti, joka renderöi yksittäisen muistiinpanon sisällön li-elementtinä.
// Se saa propsina yhden muistiinpano-olion.
const Note = ({ note }) => {
  return <li>{note.content}</li>
}

const App = () => {
  // Alustetaan tilamuuttuja notes sisältämään kolme muistiinpano-oliota.
  // Notes on taulukko, joka sisältää olioita, joilla on id, content ja important -ominaisuudet
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true,
    },
  ])
  const [newNote, setNewNote] = useState('') // Tila, johon tallennetaan input-kenttään kirjoitettu teksti
  const [showAll, setShowAll] = useState(true) // Tila, joka määrittää, näytetäänkö kaikki muistiinpanot vai ei.

  const addNote = (event) => {
    // Tapahtumankäsittelijä muistiinpanon lisäämiseen.
    // event.preventDefault() estää lomakkeen oletustoiminnon, joka olisi sivun uudelleenlataus.
    event.preventDefault()
    // Luodaan uusi muistiinpano-olio, joka sisältää input-kentän tekstin content-kentässä,
    // satunnaisesti määritellyn important-kentän ja id-kentän, joka on notes-taulukon pituus + 1.
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
      id: String(notes.length + 1),
    }

    // Päivitetään notes-tilaan uusi taulukko, joka sisältää vanhat muistiinpanot ja uuden muistiinpanon.
    // setNotes(notes.concat(noteObject)) luo uuden taulukon, joka sisältää kaikki vanhat muistiinpanot ja uuden muistiinpanon.
    setNotes(notes.concat(noteObject))
    // Tyhjennetään input-kenttä asettamalla newNote-tilaan tyhjä merkkijono.
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    // Tapapahtumankäsittelijä input-kentän muutoksille.
    // Se päivittää newNote-tilan arvoksi input-kentän nykyisen arvon, 
    // joka löytyy event.target.value:sta.
    setNewNote(event.target.value)
  }

  // Määritellään notesToShow-muuttuja, joka sisältää ne muistiinpanot, jotka näytetään.
  // Jos showAll on true, notesToShow sisältää kaikki muistiinpanot. 
  // Muuten se sisältää vain ne muistiinpanot, joiden important-kenttä on true.
  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)
          // Napin klikkaaminen vaihtaa showAll-tilan arvon päinvastaiseksi.
        }>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {// Renderöidään notesToShow-taulukko, joka sisältää ne muistiinpanot, jotka näytetään.
        // Jokainen muistiinpano käydään läpi map-metodilla.
        // Jokaisesta muistiinpanosta renderöidään Note-komponentti.
        notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote
        // lomakkeen lähettäminen kutsuu addNote-tapahtumankäsittelijää
      }>
        <input value={newNote} onChange={handleNoteChange
          // input-kentän arvon muuttaminen kutsuu handleNoteChange-tapahtumankäsittelijää
        } />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App