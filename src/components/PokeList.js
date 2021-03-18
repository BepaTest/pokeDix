import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PokeCard from './PokeCard'

function PokeList({ pokemons, capture, release, capturedPokemons }) {
  return (
    <Container fluid>
      <Row lg={5} md={4} sm={2} xs={2}>
        {pokemons.map((pok) =>
          capturedPokemons.some(
            (capturedPok) => capturedPok.name === pok.name
          ) ? (
            <Col key={pok.name}>
              <PokeCard
                key={pok.name}
                pokemon={pok}
                onClick={release}
                buttonLabel='-'
              ></PokeCard>
            </Col>
          ) : (
            <Col key={pok.name}>
              <PokeCard
                key={pok.name}
                pokemon={pok}
                onClick={capture}
                buttonLabel='+'
              ></PokeCard>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}

export default PokeList
