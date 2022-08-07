import React from 'react'
import StyledAbout from './About.styled'

import CollapsesList from '../../components/collapseslist'

const About = () => {
  return (
    <StyledAbout>
      <div className='cover'>
        <img src="./assets/img/about-cover.jpg" alt="" className="cover__picture" />
      </div>
      <section className="collapses">
        <CollapsesList />
      </section>
    </StyledAbout>
  )
}

export default About