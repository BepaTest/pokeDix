import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function PokeCard({ pokemon, onClick, buttonLabel }) {
  const pokemonIndex = pokemon.url
    ? pokemon.url.split('/')[pokemon.url.split('/').length - 2]
    : pokemon.species.url.split('/')[pokemon.species.url.split('/').length - 2]

  // in case official-artwork image link does not exist
  function addDefaultSrc(e) {
    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
  }
  return (
    <Card className='card-margin' bg='primary' text='light'>
      <Link to={`/pokemon/${pokemon.name}`}>
        <Card.Header>{pokemonIndex}</Card.Header>

        <Card.Img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`}
          onError={addDefaultSrc}
        />
      </Link>
      <Card.Body>
        <Link to={`/pokemon/${pokemon.name}`}>
          <Card.Title>{pokemon.name} </Card.Title>
        </Link>

        <Button variant='light' onClick={onClick(pokemon)}>
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default PokeCard
