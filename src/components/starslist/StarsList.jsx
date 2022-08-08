import React from 'react'
import PropTypes from 'prop-types'
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

StarsList.defaultProps = {
  fullStars: ''
}

StarsList.propTypes = {
  fullStars: PropTypes.string.isRequired
}

export default StarsList