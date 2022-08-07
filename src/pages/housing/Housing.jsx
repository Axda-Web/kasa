import React, { useState } from 'react'
import StyledHousing from './Housing.styled'

import Slideshow from '../../components/slideshow'
import BadgesList from '../../components/badgeslist'
import StarsList from '../../components/starslist'
import Profile from '../../components/profile'
import Collapse from '../../components/collapse/Collapse'

const Housing = () => {

  const [data, setData] = useState({
    "id": "c67ab8a7",
    "title": "Appartement cosy",
    "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "pictures": [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ],  
    "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    "host": {
    "name": "Nathalie Jean",
    "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
    },
    "rating": "5",
    "location": "Ile de France - Paris 17e",
    "equipments": [
    "Équipements de base",
    "Micro-Ondes",
    "Douche italienne",
    "Frigo",
    "WIFI"
    ],
    "tags": [
    "Batignolle",
    "Montmartre"
    ]
    })

  

  return (
    <StyledHousing>
      <Slideshow />
      <section className="info">
        <div className="text">
          <h1 className="title">{data.title}</h1>
          <p className="location">{data.location}</p>
        </div>
        <BadgesList className="badges" tags={data.tags} />
        <div className="container">
          <StarsList fullStars={data.rating} />
          <Profile name={data.host.name} picture={data.host.picture} />
        </div>
      </section>
      <section className="collapses">
        <Collapse head="Description" body={data.description} />
        <Collapse head="Équipements" body={data.equipments} />
      </section>
    </StyledHousing>
  )
}

export default Housing