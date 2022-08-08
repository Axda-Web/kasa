import React from 'react'
import PropTypes from 'prop-types'
import StyledBadgesList from './BadgesList.styled'
import { v4 as uuidv4 } from 'uuid'

import Badge from '../badge'

const BadgesList = ({tags}) => {

  const displayBadges = tags.map( tag => <Badge key={uuidv4()} name={tag} />)

  return (
    <StyledBadgesList>{displayBadges}</StyledBadgesList>
  )
}

BadgesList.defaultProps = {
  tags: []
}

BadgesList.propTypes = {
  tags: PropTypes.array.isRequired
}

export default BadgesList