import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes' // Tämä on palvelimen osoite, johon tehdään HTTP-pyynnöt.

/*
Oikean getAll-funktion pitäisi näyttää tältä:
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}*/


// Älä tee näin! Tämä on vain error-viestin testausta varten.
const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  return request.then((response) => response.data.concat(nonExisting))
}

const create = (newObject) => {
  // Tehdään POST-pyyntö, joka lähettää newObjectin palvelimelle.
  // post-funktio palauttaa promisen.
  const request = axios.post(baseUrl, newObject)
  // Palautetaan promisen response-olion sisältämä data, ei koko response-oliota.
  // Tämä pirää huomioida React-koodissa, joka kutsuu create-funktiota.
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  // Tehdään PUT-pyyntö, joka lähettää newObjectin palvelimelle id:n mukaisena resurssina.
  // PUT-pyyntö palauttaa promisen, joka sisältää response-olion.
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  // Palautetaan promisen response-olion sisältämä data, ei koko response-oliota.
  return request.then((response) => response.data)
}

export default {
  getAll,
  create,
  update,
}