import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile from './Profile.styled'

const Profile = ({name, picture}) => {

  const [firstName, lastName] = name.split(' ')

  return (
    <StyledProfile>
        <div className="name">{firstName}<br />{lastName}</div>
        <div className='picture-container'>
            <img src={picture} alt="profile picture" className="picture" />
        </div>
    </StyledProfile>
  )
}

Profile.defaultProps = {
  name: 'Loading...',
  picture: ''
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

export default Profile