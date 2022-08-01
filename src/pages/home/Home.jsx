import React from 'react'
import StyledHome from './Home.styled'

import CardsList from '../../components/cardsList/CardsList'

const Home = () => {
  return (
    <StyledHome>
      <CardsList />
    </StyledHome>
  )
}

export default Home