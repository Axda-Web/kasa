import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import StyledStarsList from './StarsList.styled'

import Star from '../star'


const StarsList = ({fullStars}) => {

  const starsArray = Array(+fullStars).fill(1).concat(Array(5 - fullStars).fill(0))
  const starsDisplay = starsArray.map( star => <Star key={uuidv4()} active={star ? true : false} />)

  return (
    <StyledStarsList>
      {starsDisplay}
    </StyledStarsList>
  )
}

export default StarsList