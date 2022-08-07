import React from 'react'
import StyledStar from './Star.styled'

const Star = ({active}) => {
  return (
    <StyledStar>
        <img src={`./assets/icons/${active ? 'star-full.svg' : 'star-empty.svg'}`} alt="rating star" className="star" />
    </StyledStar>
  )
}

export default Star