const express = require('express')
const app = express()

// Muistiinpanot, jotka tallennetaan muistiin taulukkomuodossa. Jokaisella muistiinpanolla on id, content ja important kentät.
// Yleensä tällainen data tallennetaan tietokantaan, mutta haluamme ensin tutustua palvelimen ohjelmointiin ilman tietokantaa.
let notes = [
    {
        id: '1',
        content: 'HTML is easy',
        important: true,
    },
    {
        id: '2',
        content: 'Browser can execute only JavaScript',
        important: false,
    },
    {
        id: '3',
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true,
    },
]

// Middleware, joka mahdollistaa JSON-muotoisten HTTP-pyyntöjen käsittelyn.
// express.json() -middleware muuntaa HTTP-pyynnön body-kentän JSON-muotoon ja asettaa sen request.body -kenttään.
// Tämä mahdollistaa JSON-muotoisen datan lähettämisen HTTP-pyynnön body:ssa.
app.use(express.json())

// Route sovelluksen juureen. Route vastaa lähettämällä HTML-muotoisen merkkijonon.
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

// Route kaikkien muistiinpanojen hakuun. Route vastaa lähettämällä koko notes-taulukon JSON-muodossa.
// response.json() -metodi muuntaa JavaScript-olion JSON-muotoon ja lähettää sen vastauksena HTTP-pyyntöön.
app.get('/api/notes', (request, response) => {
    response.json(notes)
})

// route yksittäisen muistiinpanon hakuun. Route hakee muistiinpanon, jonka id vastaa URL:ssa parametrina annettua id:tä.
// URL:ssa parametri määritellään kaksoispisteen avulla.
app.get('/api/notes/:id', (request, response) => {
    // request.params -kenttä sisältää URL:ssa parametrina annetut arvot.
    // Tässä tapauksessa URL:ssa on parametrina id, joka saadaan request.params.id -kentästä.
    const id = request.params.id

    // Haetaan muistiinpano notes-taulukosta find-metodilla.
    const note = notes.find((note) => note.id === id)

    if (note) {
        // Jos muistiinpano löytyy, sovellus vastaa sen JSON-muodossa.
        response.json(note)
    } else {
        // Jos muistiinpanoa ei löydy, sovellus vastaa statuskoodilla 404 Not Found.
        response.status(404).end()
    }
})

// Apufunktio id:n luontiin. Voit käyttää tätä tehtävässä 3.5
const generateId = () => {
    const maxId =
        notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0
    return String(maxId + 1)
}

// route HTTP POST -pyynnön käsittelyyn. Route luo uuden muistiinpanon, 
// joka lisätään notes-taulukkoon.
app.post('/api/notes', (request, response) => {
    // Pyynnön mukana lähetetty data löytyy request.body -kentästä.
    const body = request.body

    if (!body.content) {
        // Jos pyynnön body:ssa ei ole content kenttää, vastataan
        // statuskoodilla 400 Bad Request ja virheilmoituksella.
        return response.status(400).json({
            error: 'content missing',
        })
    }

    // Luodaan uusi muistiinpano olio, jonka content ja important kentät saadaan pyynnön body:sta.
    // Id kenttä luodaan generateId-funktiolla, joka generoi uuden id:n notes-taulukossa olevien id:iden perusteella.
    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }
    // Uusi muistiinpano lisätään notes-taulukkoon concat-metodilla.
    notes = notes.concat(note)
    // Lopuksi sovellus vastaa uudella muistiinpanolla JSON-muodossa.
    response.json(note)
})

// route HTTP DELETE -pyynnön käsittelyyn. Route poistaa muistiinpanon,
// jonka id vastaa URL:ssa parametrina annettua id:tä.
// Jos muistiinpano löytyy, se poistetaan ja vastataan statuskoodilla 204 No Content.
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    // Poistetaan muistiinpano notes-taulukosta filter-metodilla, joka palauttaa uuden taulukon,
    // joka sisältää kaikki muistiinpanot, joiden id ei ole sama kuin URL:ssa parametrina annettu id.
    notes = notes.filter((note) => note.id !== id)

    response.status(204).end()
})

// Sovellus käynnistetään porttiin 3001
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})