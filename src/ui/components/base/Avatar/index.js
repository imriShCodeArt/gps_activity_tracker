import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as Root } from '@mui/material'

function Avatar({ name, img, onClick, size }) {
  const avatarSize = () => {
    if (!size) return { width: '30px', height: '30px', fontSize: '1rem' }
    if (size === 'md')
      return { width: '30px', height: '30px', fontSize: '1rem' }
      if (size === 'sm')
        return { width: '15px', height: '15px', fontSize: '.75rem' }
    if (size === 'lg')
      return { width: '3rem', height: '3rem', fontSize: '2rem' }
    if (size === 'xl')
      return { width: '5rem', height: '5rem', fontSize: '4rem' }
  }
  return (
    <Root
      onClick={onClick}
      sx={{
        cursor: onClick && 'pointer',
        ...avatarSize(),
      }}
    >
      {img || `${name.charAt(0)}`}
    </Root>
  )
}

Avatar.defaultProps = {
  name: 'A',
}

Avatar.propTypes = {
  name: PropTypes.string,
}

export default Avatar
