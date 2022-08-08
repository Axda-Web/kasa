import React, { useContext } from 'react'
import { HousingContext } from '../../context/housingContext'
import StyledHousing from './Housing.styled'

import { useSearchParams } from 'react-router-dom'

import Slideshow from '../../components/slideshow'
import BadgesList from '../../components/badgeslist'
import StarsList from '../../components/starslist'
import Profile from '../../components/profile'
import Collapse from '../../components/collapse/Collapse'

const Housing = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  const { housing } = useContext(HousingContext)

  const selectedHousing = housing.find( housing => housing.id === id)
  const { pictures, title, location, tags, rating, host, description, equipments } = selectedHousing

  return (
    <StyledHousing>
      <Slideshow photosUrl={pictures}/>
      <section className="info">
        <div className="text">
          <h1 className="title">{title}</h1>
          <p className="location">{location}</p>
        </div>
        <BadgesList className="badges" tags={tags} />
        <div className="container">
          <StarsList fullStars={rating} />
          <Profile name={host.name} picture={host.picture} />
        </div>
      </section>
      <section className="collapses">
        <Collapse head="Description" body={description} />
        <Collapse head="Équipements" body={equipments} />
      </section>
    </StyledHousing>
  )
}

export default Housing