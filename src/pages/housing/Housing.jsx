import React from 'react'
import StyledHousing from './Housing.styled'

import Slideshow from '../../components/slideshow'
import Badge from '../../components/badge'
import Collapse from '../../components/collapse/Collapse'

const Housing = () => {
  return (
    <StyledHousing>
      <Slideshow />
      <Badge />
      <Collapse />
    </StyledHousing>
  )
}

export default Housing