import { useState } from 'react'
import styled from 'styled-components'

const Card = ({ card }) => {
  return (
    <div>
      <h3>{card.title}</h3>
      <p>{card.content}</p>
    </div>
  )
}

const ListOfCards = () => {
  const cards = [
    {
      title: 'Tehtävä 1',
      content: 'Opettele Reactia',
      important: true
    },
    {
      title: 'Tehtävä 2',
      content: 'Tee React-sovellus',
      important: false
    },
    {
      title: 'Tehtävä 3',
      content: 'Opettele styled-componentsin käyttö',
      important: true
    }
  ]

  return (
    <div>
        <Card card = {cards[0]} />
        <Card card = {cards[1]} />
        <Card card = {cards[2]} />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Tehtävälista</h1>
      <ListOfCards />
    </div>
  )
}


export default App
