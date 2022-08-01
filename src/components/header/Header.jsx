import React from 'react'
import StyledHeader from './Header.styled'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img className='header__logo' src="./img/logo-header.svg" alt="Kasa logo" />
      </div>
      <nav>
        <ul className='header__nav'>
          <li><NavLink to='/'>Accueil</NavLink></li>
          <li><NavLink to='/about'>A Propos</NavLink></li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header