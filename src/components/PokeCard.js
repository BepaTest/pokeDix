import React from 'react'
import { Card } from 'react-bootstrap'

function PokeCard(props) {
  //   console.log(props.pokemon)
  const pokemonIndex = props.pokemon.url.split('/')[
    props.pokemon.url.split('/').length - 2
  ]
  return (
    <Card bg='primary' text='light'>
      <Card.Header>{pokemonIndex}</Card.Header>
      <Card.Body>
        <Card.Img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`}
          //or "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
        />
        <Card.Title>{props.pokemon.name} </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
