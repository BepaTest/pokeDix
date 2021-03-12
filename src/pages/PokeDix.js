import React, { useState, useEffect } from 'react'
import PokeList from '../components/PokeList'
import axios from 'axios'
import PaginationDex from '../components/PaginationDex'

function PokeDix() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  )
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)

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

  if (loading) return 'Loading...'

  return (
    <>
      <PokeList pokemon={pokemon} />
      <PaginationDex
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        pageNumber={pageNumber}
      />
    </>
  )
}

export default PokeDix
