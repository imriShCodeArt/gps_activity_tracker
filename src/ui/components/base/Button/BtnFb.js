import React from 'react'

import { Button as Root } from '@mui/material'
import { Facebook } from '@mui/icons-material'

function BtnFb({ onClick, text, children }) {
  return (
    <Root
      variant='contained'
      onClick={onClick}
      sx={{
        bgcolor: '#4267B2',
        color: '#FFF',
        textTransform: 'none',
        fontSize: '.8rem',
        '&:hover': { bgcolor: '#6287B2' },
      }}
    >
      <Facebook sx={{ fontSize: '1.2rem', mr: '.2rem' }} />
      Sign with Facebook
    </Root>
  )
}

export default BtnFb
