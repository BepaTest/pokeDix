import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Button, ProgressBar } from 'react-bootstrap'

function Pokemon(props) {
  const [pokemonInfo, setPokemonInfo] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log('RES', res.data)
        setPokemonInfo(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('PokemonError', err)
      })
    return () => cancel()
  }, [])

  // in case official-artwork image link does not exist
  function addDefaultSrc(e) {
    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`
  }

  if (loading) return 'Loading...'
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '60%' }}>
        <Card.Header>
          {pokemonInfo.id}
          {pokemonInfo.types.map((t) => (
            <p key={t.slot}>{t.type.name}</p>
          ))}
        </Card.Header>
        <Card.Img
          className='singlePokImg'
          variant='top'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
          onError={addDefaultSrc}
        />
        <Card.Body className='text-center'>
          <Card.Title>{pokemonInfo.name.toUpperCase()}</Card.Title>
          <Card.Text>
            Hauteur: {pokemonInfo.height} <br />
            Poids: {pokemonInfo.weight}
          </Card.Text>
          {pokemonInfo.stats.map((s) => (
            <div key={`${s.stat.name}-${s.base_stat}`}>
              <p>{s.stat.name.toUpperCase()}:</p>

              <ProgressBar now={s.base_stat} label={`${s.base_stat}%    `} />
              <br />
            </div>
          ))}

          <br />
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
        <Card.Footer className='text-muted'></Card.Footer>
      </Card>
    </div>
  )
}

export default Pokemon
