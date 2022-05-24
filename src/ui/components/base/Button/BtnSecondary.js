import React from 'react'

import { Button as Root, useTheme } from '@mui/material'

function BtnSecondary({ onClick, text, children }) {
  return (
    <Root
      variant='contained'
      onClick={onClick}
      color='secondary'
      sx={{ color: useTheme().palette.primary.main }}
    >
      { text || children }
    </Root>
  )
}

export default BtnSecondary
