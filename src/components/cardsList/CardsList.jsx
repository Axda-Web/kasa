import React, { useState, useEffect } from 'react'
import StyledCardsList from './CardsList.styled'
import { v4 as uuidv4 } from 'uuid'

import Card from '../card'

const CardsList = () => {

  const [data, setData] = useState([])

  useEffect( () => {
    const getData = async () => {
      const res = await fetch('http://localhost:3001/data')
      const json = await res.json()
      setData(json)
    }
    getData()
  }, [])

  const cards = data.map( card => <Card key={uuidv4()} {...card} />)


  return (
    <StyledCardsList>
      <div className='container'>
        {cards}
      </div>
    </StyledCardsList>
  )
}

export default CardsList