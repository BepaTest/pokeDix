import { useReducer } from 'react'

// TO LIST ALL CAPTURED POKEMONS = RELEASING ONE POK
const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter((pokemon) => pokemon.name !== releasedPokemon.name)

// RELEASE POKEMON ON CLICK
const releasePokemon = (releasedPokemon, state) => ({
  pokemons: state.pokemons,
  capturedPokemons: getCapturedPokemons(
    state.capturedPokemons,
    releasedPokemon
  ),
})

// CAPTURE POKEMON ON CLICK
const capturePokemon = (pokemon, state) => ({
  pokemons: state.pokemons,
  capturedPokemons:
    state.capturedPokemons.length < 6
      ? [...state.capturedPokemons, pokemon]
      : (window.alert('Ton équipe est au complet'), state.capturedPokemons),
})

const addPokemons = (pokemons, state) => ({
  pokemons: pokemons,
  capturedPokemons: state.capturedPokemons,
})

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'CAPTURE':
      return capturePokemon(action.pokemon, state)
    case 'RELEASE':
      return releasePokemon(action.pokemon, state)
    case 'ADD_POKEMONS':
      return addPokemons(action.pokemons, state)
    default:
      return state
  }
}

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    capturedPokemons: [],
  })
