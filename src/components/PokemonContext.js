import React, { createContext } from 'react'
import { usePokemonReducer } from './usePokemonReducer'

const PokemonContext = createContext()

const PokemonProvider = (props) => {
  const [state, dispatch] = usePokemonReducer()
  const { pokemons, capturedPokemons } = state

  const capture = (pokemon) => () => dispatch({ type: 'CAPTURE', pokemon })
  const release = (pokemon) => () => dispatch({ type: 'RELEASE', pokemon })
  const addPokemons = (pokemons) => dispatch({ type: 'ADD_POKEMONS', pokemons })

  const providerValue = {
    pokemons,
    capturedPokemons,
    capture,
    release,
    addPokemons,
  }

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider }
