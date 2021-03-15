import React, { useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import pokType from '../constants/pokType.json'
import axios from 'axios'

function PokeFilter(props) {
  const [dropDownTitle, setDropDownTitle] = useState('Filtrer par type')

  function callPokTypeAPI(url) {
    axios.get(url).then((res) => {
      props.filterPokemons(res.data.pokemon.map((p) => p.pokemon))
    })
  }

  const handleDropdownTitle = (eventKey, event) => {
    setDropDownTitle(eventKey)
  }

  return (
    <>
      <DropdownButton
        id='dropdown-basic-button'
        variant='danger'
        title={dropDownTitle}
      >
        {pokType.type.map((type, index) => {
          return (
            <Dropdown.Item
              onClick={() => callPokTypeAPI(type.url)}
              key={type.name}
              index={index}
              eventKey={type.name}
              onSelect={handleDropdownTitle}
            >
              {type.name}
            </Dropdown.Item>
          )
        })}
      </DropdownButton>
    </>
  )
}

export default PokeFilter
