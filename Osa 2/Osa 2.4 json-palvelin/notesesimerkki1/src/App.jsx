import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note' // Note-kiomponentti on määritelty omassa moduulissaan.

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    // Tämä funktio suoritetaan vain kerran, kun komponentti renderöidään ensimmäisen kerran.
    console.log('effect')
    // Axios hakee palvelimelta muistiinpanot ja asettaa ne tilamuuttujaan.
    axios.get('http://localhost:3001/notes').then((response) => {
      console.log('promise fulfilled')
      // response.data sisältää palvelimelta palautuneet muistiinpanot.
      // Asetetaan muistiinpanot komponentin tilaan, mikä aiheuttaa komponentin uudelleenrenderöinnin.
      setNotes(response.data)
    })
  }, [])// Tyhjä riippuvuuslista tarkoittaa, että efekti suoritetaan vain kerran.

  // Tämä logi tulostuu joka kerta, kun komponentti renderöidään uudestaan.
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    // Axios tekee palvelimelle POST-pyynnön, joka lisää palvelimelle uuden muistiinpanon.
    axios.post('http://localhost:3001/notes', noteObject).then((response) => {
      // response.data sisältää palvelimelta palautuneen uuden muistiinpanon, 
      // joka sisältää myös palvelimen luoman id:n.
      // Muistiinpanon lisääminen palvelimelle ei päivitä automaattisesti komponentin tilaa,
      // joten meidän täytyy manuaalisesti lisätä uusi muistiinpano tilamuuttujaan.
      // On tärkeää käyttää palvelimen palauttamaa muistiinpanoa, koska se voi poiketa siitä,
      // mikä on lähetetty palvelimelle.
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App