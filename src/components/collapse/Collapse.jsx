import React, { useState } from 'react'
import StyledCollapse from './Collapse.styled'
import { v4 as uuidv4 } from 'uuid'


const Collapse = ({head, body}) => {

  const [showCollapse, setShowCollapse] = useState(false)

  const handleCollapseClick = e => {
    setShowCollapse( prevState => !prevState )
  }

  return (
    <StyledCollapse >
    <div className={`collapse ${showCollapse ? 'show' : ''}`}>
      <div className="head" onClick={handleCollapseClick}>
        <p className="head__text">{head}</p>
        <div className="head__icons">
          <img src="./assets/icons/arrow-up.svg" alt="" className="head__icon head__icon--up" /> 
        </div>
      </div>
      <div className="body">{
        Array.isArray(body) ?
        <ul className='equipments-container'>
          {body.map( equipment => <li key={uuidv4()} className='equipment'>{equipment}</li> )}
        </ul> :
        <p>{body}</p>
      }</div> 
    </div>
    </StyledCollapse>
  )
}

export default Collapse