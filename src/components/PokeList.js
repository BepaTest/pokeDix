import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PokeCard from './PokeCard'

function PokeList({ pokemon }) {
  //   console.log(pokemon)
  return (
    <Container fluid>
      <Row lg={5} md={4} sm={2} xs={1}>
        {pokemon.map((pok) => (
          <Col key={pok.name}>
            <PokeCard key={pok.name} pokemon={pok}></PokeCard>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default PokeList
