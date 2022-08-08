import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledSlideshow from './Slideshow.styled'

const Slideshow = ({photosUrl}) => {

  const [currentPhotoUrlIndex, setCurrentPhotoUrlIndex] = useState(0)

  const handlePrevClick = e => {
    if(currentPhotoUrlIndex === 0) {
      setCurrentPhotoUrlIndex(photosUrl.length -1)
      return
    }
    setCurrentPhotoUrlIndex( prevPhotoUrlIndex => prevPhotoUrlIndex - 1)
  }

  const handleNextClick = e => {
    if(currentPhotoUrlIndex === photosUrl.length - 1) {
      setCurrentPhotoUrlIndex(0)
      return
    }
    setCurrentPhotoUrlIndex( prevPhotoUrlIndex => prevPhotoUrlIndex + 1)
  }

  return (
    <StyledSlideshow backgroundImgUrl={photosUrl[currentPhotoUrlIndex]}>
      <img  src="./assets/icons/arrow-left.svg"
            alt=""
            className="arrow arrow--left"
            onClick={handlePrevClick}
          />
      <img  src="./assets/icons/arrow-right.svg"
            alt=""
            className="arrow arrow--right"
            onClick={handleNextClick}
          />
    </StyledSlideshow>
  )
}

Slideshow.defaultProps = {
  photosUrl: []
}

Slideshow.propTypes = {
  photosUrl: PropTypes.array.isRequired
}

export default Slideshow