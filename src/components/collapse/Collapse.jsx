import React, { useState } from 'react'
import StyledCollapse from './Collapse.styled'

const Collapse = ({head, body}) => {

  const [showCollapse, setShowCollapse] = useState(false)

  const handleCollapseClick = e => {
    setShowCollapse( prevState => !prevState )
  }

  return (
    <StyledCollapse>
      <div className="head" onClick={handleCollapseClick}>
        <p className="head__text">{head}</p>
        <div className="head__icons">
          { showCollapse ? <img src="./assets/icons/arrow-up.svg" alt="" className="head__icon head__icon--up" /> :
          <img src="./assets/icons/arrow-down.svg" alt="" className="head__icon head__icon--down" /> }
          
        </div>
      </div>
      { showCollapse && <div className="body">{body}</div> }
    </StyledCollapse>
  )
}

export default Collapse