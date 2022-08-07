import React, { useState } from 'react'
import StyledSlideshow from './Slideshow.styled'

const Slideshow = () => {

  /* Mocked data */
  const [photosUrl, setPhotosUrl] = useState([
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
        ])
  /* Mocked data END */

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

export default Slideshow