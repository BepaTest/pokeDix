import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Card, Button, ProgressBar } from 'react-bootstrap'
import { PokemonContext } from '../components/PokemonContext'

function Pokemon(props) {
  const [pokemonInfo, setPokemonInfo] = useState()
  const [loading, setLoading] = useState(true)
  const { capturedPokemons, release, capture } = useContext(PokemonContext)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setPokemonInfo(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log('PokemonError', err)
      })
    return () => cancel()
  }, [setPokemonInfo])

  // in case official-artwork image link does not exist
  function addDefaultSrc(e) {
    e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`
  }

  if (loading) return 'Loading...'

  return (
    <div className='cardContainer'>
      <Card className='bigCardWidth'>
        <Card.Header>
          {pokemonInfo.id}
          {pokemonInfo.types.map((t) => (
            <div key={t.slot} className={`typeDiv ${t.type.name}`}>
              <p>{t.type.name}</p>
            </div>
          ))}
        </Card.Header>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
          }}
        >
          <Card.Img
            className={`singlePokImg ${pokemonInfo.types[0].type.name}`}
            variant='top'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
            onError={addDefaultSrc}
          />
        </div>

        <Card.Body className='text-center'>
          <Card.Title>{pokemonInfo.name.toUpperCase()}</Card.Title>
          <Card.Text>
            Hauteur: {`${pokemonInfo.height}` * 10} cm <br />
            Poids: {`${pokemonInfo.weight}` / 10} kg
          </Card.Text>
          {pokemonInfo.stats.map((s) => (
            <div key={`${s.stat.name}-${s.base_stat}`}>
              <p>{s.stat.name.toUpperCase()}:</p>

              <ProgressBar now={s.base_stat} label={`${s.base_stat}%    `} />
              <br />
            </div>
          ))}

          <br />
          {capturedPokemons.some(
            (capturedPok) => capturedPok.name === pokemonInfo.name
          ) ? (
            <Button variant='danger' onClick={release(pokemonInfo)}>
              Enlever de mon équipe
            </Button>
          ) : (
            <Button variant='success' onClick={capture(pokemonInfo)}>
              Ajouter à mon équipe
            </Button>
          )}
        </Card.Body>
        <Card.Footer className='text-muted'></Card.Footer>
      </Card>
    </div>
  )
}

export default Pokemon
