import React from 'react'
import { CardColumns } from 'react-bootstrap'
import PokeCard from './PokeCard'

function PokeList({ pokemon }) {
  console.log(pokemon)
  return (
    <div>
      <CardColumns>
        {pokemon.map((pok) => (
          <PokeCard key={pok.name} pokemon={pok}></PokeCard>
        ))}
      </CardColumns>
    </div>
  )
}

export default PokeList
