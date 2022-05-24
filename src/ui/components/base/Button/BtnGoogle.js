import React from 'react'

import { Button as Root } from '@mui/material'
import { Google } from '@mui/icons-material'

function BtnGoogle({ onClick, text, children }) {
  return (
    <Root
      variant='outlined'
      onClick={onClick}
      color='inherit'
      sx={{
        textTransform: 'none',
        fontSize: '.8rem',
      }}
      >
      <Google sx={{ fontSize: '1.2rem', mr: '.2rem' }} />
      Sign with Google
    </Root>
  )
}

export default BtnGoogle
