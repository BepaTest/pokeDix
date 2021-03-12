import React from 'react'
import { Card } from 'react-bootstrap'

function PokeCard(props) {
  console.log(props.pokemon)
  return (
    <Card bg='primary' text='light'>
      <Card.Header>{props.pokemon.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.pokemon.name} </Card.Title>
        <Card.Text>Bla</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
