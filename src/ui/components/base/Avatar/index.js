import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as Root } from '@mui/material'

function Avatar({ name, img, onClick }) {
  return (
    <Root
      onClick={onClick}
      sx={{
        cursor: onClick && 'pointer',
        fontSize: '1rem',
        width: '30px',
        height: '30px',
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
