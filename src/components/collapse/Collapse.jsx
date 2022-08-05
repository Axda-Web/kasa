import React, { useState } from 'react'
import StyledCollapse from './Collapse.styled'

const Collapse = ({head, body}) => {

  const [showCollapse, setShowCollapse] = useState(false)

  const handleCollapseClick = e => {
    setShowCollapse( prevState => !prevState )
  }

  return (
    <StyledCollapse >
    <div className={`collapse ${showCollapse ? 'show' : ''}`}>
      <div className="head" onClick={handleCollapseClick}>
        <p className="head__text">{head}titre</p>
        <div className="head__icons">
          <img src="./assets/icons/arrow-up.svg" alt="" className="head__icon head__icon--up" /> 
          
        </div>
      </div>
      <div className="body">{body} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque alias dicta harum molestias numquam cumque impedit architecto repudiandae fuga earum cupiditate nemo, vel molestiae. Rem aperiam laborum explicabo repellat facere!</div> 
    </div>
    </StyledCollapse>
  )
}

export default Collapse