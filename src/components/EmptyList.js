import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EmptyList({ capturedPokemons }) {
  const emptyArr = Array.from(Array(6 - capturedPokemons.length).keys())

  return (
    <Container fluid>
      <Row lg={6} md={3} sm={2} xs={2}>
        {emptyArr.map((slot) => (
          <Col key={slot}>
            <Link to='/'>
              <Card bg='dark' className='emptyCard-margin' text='light'>
                <Card.Body className='emptyCard-body'>
                  <Card.Text>
                    Il faut cliquer ici ou sur PokeDix pour attraper des
                    pokémons
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <br />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default EmptyList
