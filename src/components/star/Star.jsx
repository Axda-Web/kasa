import React from 'react'
import PropTypes from 'prop-types'
import StyledStar from './Star.styled'

const Star = ({active}) => {
  return (
    <StyledStar>
        <img src={`./assets/icons/${active ? 'star-full.svg' : 'star-empty.svg'}`} alt="rating star" className="star" />
    </StyledStar>
  )
}

Star.defaultProps = {
  active: false
}

Star.propTypes = {
  active: PropTypes.bool.isRequired
}

export default Star