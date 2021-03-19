import React, { useState, useEffect, useContext } from 'react'
import PokeList from '../components/PokeList'
import axios from 'axios'
import PaginationDex from '../components/PaginationDex'
import PokeFilter from '../components/PokeFilter'
import { PokemonContext } from '../components/PokemonContext'

function PokeDix() {
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  )
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [isNotFiltered, setIsNotFiltered] = useState(true)
  const [isSearched, setIsSearched] = useState(false)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        addPokemons(res.data.results)
      })

    return () => cancel()
  }, [currentPageUrl])

  const {
    pokemons,
    addPokemons,
    capturedPokemons,
    capture,
    release,
  } = useContext(PokemonContext)

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
    setPageNumber((prevPageNumber) => prevPageNumber + 1)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    setPageNumber((prevPageNumber) => prevPageNumber - 1)
  }

  function showFilteredPokemon(newPokArray) {
    addPokemons(newPokArray)
    setIsNotFiltered(false)
  }

  const onChangeForm = (e) => {
    e.preventDefault()
    getPokemon(e.target.value.toLowerCase())
    e.target.value
      ? setIsSearched(true)
      : setIsSearched(false) && setCurrentPageUrl(nextPageUrl)
  }

  function getPokemon(text) {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1118`).then((res) => {
      addPokemons(res.data.results.filter((pok) => pok.name.includes(text)))
    })
  }

  const Pagination = isNotFiltered ? (
    <div className='filter-container'>
      <PaginationDex
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        pageNumber={pageNumber}
      />
    </div>
  ) : null

  if (loading) return 'Loading...'

  return (
    <>
      <h1 className='title'>Liste des Pokémon</h1>
      <div className='filter-container'>
        <input
          type='text'
          placeholder='Chercher un Pokémon'
          className='mr-sm-2'
          onChange={onChangeForm}
        />
      </div>
      {isSearched ? null : (
        <div>
          <div className='filter-container'>
            <PokeFilter filterPokemons={showFilteredPokemon} />
          </div>
          {Pagination}
        </div>
      )}

      {PokeList({
        pokemons,
        capture,
        release,
        capturedPokemons,
      })}
      <div className='filter-container'>{isSearched ? null : Pagination}</div>
    </>
  )
}

export default PokeDix
