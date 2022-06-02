import React from 'react'

import { Button as Root, useTheme } from '@mui/material'

function BtnSecondary({ onClick, text, children }) {
  return (
    <Root
      variant='outlined'
      onClick={onClick}
      color='primary'
      sx={{ color: useTheme().palette.primary.main }}
    >
      { text || children }
    </Root>
  )
}

export default BtnSecondary
