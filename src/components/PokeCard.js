import React from 'react'
import { Card } from 'react-bootstrap'

function PokeCard(pokemon) {
  console.log(pokemon)
  return (
    <Card bg='primary' text='light'>
      <Card.Header>{pokemon.pokemon.name}</Card.Header>
      <Card.Body>
        <Card.Title>{pokemon.pokemon.name} </Card.Title>
        <Card.Text>Bla</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
