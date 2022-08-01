import React, { useState, useEffect } from 'react'
import StyledCardsList from './CardsList.styled'

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

  const cards = data.map( card => <Card {...card} />)


  return (
    <StyledCardsList>
      <div className='container'>
        {cards}
      </div>
    </StyledCardsList>
  )
}

export default CardsList