import React, { Suspense } from 'react'
import StyledHome from './Home.styled'

import Loader from '../../components/loader'
const CardsList = React.lazy( async () => await import('../../components/cardsList'))

const Home = () => {
  return (
    <StyledHome>
      <div className='hero'>
        <p className='hero__text'>Chez vous,<br /> partout et ailleurs</p>
      </div>
      <Suspense fallback={<Loader />}>
        <CardsList />
      </Suspense>
    </StyledHome>
  )
}

export default Home