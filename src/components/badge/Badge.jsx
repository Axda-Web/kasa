import React from 'react'
import PropTypes from 'prop-types'
import StyledBadge from './Badge.styled'

const Badge = ({name}) => {
  return (
    <StyledBadge>{name}</StyledBadge>
  )
}

Badge.defaultProps = {
  name: 'Loading...'
}

Badge.propTypes = {
  name: PropTypes.string.isRequired
}

export default Badge
