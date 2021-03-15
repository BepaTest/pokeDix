import React, { useState, useEffect } from 'react'
import PokeList from '../components/PokeList'
import axios from 'axios'
import PaginationDex from '../components/PaginationDex'
import PokeFilter from '../components/PokeFilter'

function PokeDix() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  )
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [isNotFiltered, setIsNotFiltered] = useState(true)

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
        setPokemon(res.data.results.map((p) => p))
      })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
    setPageNumber((prevPageNumber) => prevPageNumber + 1)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    setPageNumber((prevPageNumber) => prevPageNumber - 1)
  }

  function showFilteredPokemon(newPokArray) {
    setPokemon(newPokArray)
    setIsNotFiltered(false)
    console.log()
  }

  if (loading) return 'Loading...'

  return (
    <>
      <PokeFilter filterPokemons={showFilteredPokemon} />
      {isNotFiltered ? (
        <PaginationDex
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          pageNumber={pageNumber}
        />
      ) : null}
      <PokeList pokemon={pokemon} />
      {isNotFiltered ? (
        <PaginationDex
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          pageNumber={pageNumber}
        />
      ) : null}
    </>
  )
}

export default PokeDix
