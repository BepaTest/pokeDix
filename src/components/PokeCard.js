import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PokeCard(props) {
  const pokemonIndex = props.pokemon.url.split('/')[
    props.pokemon.url.split('/').length - 2
  ]
  // in case official-artwork image link does not exist
  function addDefaultSrc(e) {
    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  }

  return (
    <Link to={`/pokemon/${props.pokemon.name}`}>
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
    </Link>
  )
}

export default PokeCard
