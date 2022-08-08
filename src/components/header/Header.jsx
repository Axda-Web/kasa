import React from 'react'
import StyledHeader from './Header.styled'

import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <StyledHeader>
      <div className='logo-container' onClick={e => navigate('/')}>
        <img className='header__logo' src="./assets/img/logo-header.svg" alt="Kasa logo" />
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