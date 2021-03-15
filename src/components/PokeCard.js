import React from 'react'
import { Card } from 'react-bootstrap'

function PokeCard(props) {
  const pokemonIndex = props.pokemon.url.split('/')[
    props.pokemon.url.split('/').length - 2
  ]
  // in case official-artwork image link does not exist
  function addDefaultSrc(ev) {
    ev.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  }

  return (
    <Card className='card-margin' bg='primary' text='light'>
      <Card.Header>{pokemonIndex}</Card.Header>

      <Card.Img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`}
        onError={addDefaultSrc}
      />
      <Card.Body>
        <Card.Title>{props.pokemon.name} </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
