import React from 'react'
import StyledCard from './Card.styled'


const Card = ({title, id, cover}) => {
  return (
    <StyledCard to={`/housing?id=${id}`} backgroundImgUrl={cover}>
      <article className='card'>
        <p className='card__title'>{title}</p>
      </article>
    </StyledCard>
  )
}

export default Card