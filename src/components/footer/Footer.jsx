import React from 'react'
import StyledFooter from './Footer.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo">
        <img src="./assets/img/logo-footer.svg" alt="Kasa logo" />
      </div>
      <p className='text'>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  )
}

export default Footer