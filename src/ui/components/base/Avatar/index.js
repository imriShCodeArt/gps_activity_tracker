import React from 'react'
import PropTypes from 'prop-types'
import { Avatar as Root } from '@mui/material'

function Avatar({ name, img, onClick }) {
  return (
    <Root onClick={onClick} sx={{ cursor: onClick && 'pointer' }}>
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
