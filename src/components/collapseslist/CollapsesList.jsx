import React from 'react'
import StyledCollapsesList from './CollapsesList.styled'
import { v4 as uuidv4 } from 'uuid'

import Collapse from '../collapse/Collapse'


const CollapsesList = () => {

  const data = [
    {
      head: 'Fiabilité',
      body: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    }, {
      head: 'Respect',
      body: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    }, {
      head: 'Service',
      body: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
    }, {
      head: 'Sécurité',
      body: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    }
  ]

  const displayData = data.map( collapse => <Collapse key={uuidv4()} {...collapse} />)

  return (
    <StyledCollapsesList>{displayData}</StyledCollapsesList>
  )
}

export default CollapsesList