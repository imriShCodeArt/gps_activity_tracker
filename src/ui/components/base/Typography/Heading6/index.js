import { Typography } from '@mui/material'
import React from 'react'

function Heading6({ text, children, ...rest }) {
  return (
    <Typography
      fontStyle={'italic'}
      fontSize='.95rem'
      fontWeight={700}
      textTransform={'uppercase'}
      letterSpacing={0.75}
      variant='h6'
      {...rest}
    >
      {text || children}
    </Typography>
  )
}

export default Heading6
