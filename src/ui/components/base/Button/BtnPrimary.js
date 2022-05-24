import React from 'react'

import { Button as Root } from '@mui/material'

function BtnPrimary({ onClick, text, children }) {
  return (
    <Root
      variant='contained'
      onClick={onClick}
      color='primary'
      sx={{ color: '#FFF' }}
    >
      { text || children }
    </Root>
  )
}

export default BtnPrimary
