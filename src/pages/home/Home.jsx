import React from 'react'
import StyledHome from './Home.styled'

import CardsList from '../../components/cardsList/CardsList'

const Home = () => {
  return (
    <StyledHome>
      <div className='hero'>
        <p className='hero__text'>Chez vous,<br /> partout et ailleurs</p>
      </div>
      <CardsList />
    </StyledHome>
  )
}

export default Home