import React, { useContext } from 'react'
import { PokemonContext } from '../components/PokemonContext'
import PokeList from '../components/PokeList'
import EmptyList from '../components/EmptyList'

function DixTeam() {
  const { capturedPokemons, release } = useContext(PokemonContext)
  console.log('DixTeam: capturedPokemons', capturedPokemons)
  return (
    <div>
      <h1 className='title'>Mon équipe</h1>
      {PokeList({
        pokemons: capturedPokemons,
        capturedPokemons: capturedPokemons,
        release: release,
      })}
      <EmptyList capturedPokemons={capturedPokemons} />
    </div>
  )
}

export default DixTeam
