import React from 'react'
import PropTypes from 'prop-types'
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

Card.defaultProps = {
  title: 'Loading...',
  id: 'Loading...',
  cover: ''
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
}

export default Card