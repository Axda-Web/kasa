import React from 'react'
import StyledBadgesList from './BadgesList.styled'
import { v4 as uuidv4 } from 'uuid'

import Badge from '../badge'

const BadgesList = ({tags}) => {

  const displayBadges = tags.map( tag => <Badge key={uuidv4()} name={tag} />)

  return (
    <StyledBadgesList>{displayBadges}</StyledBadgesList>
  )
}

export default BadgesList