import { Typography } from '@mui/material'
import React from 'react'

function Heading5({ text, children, size, weight, ...rest }) {
  const letterSize = () => {
    switch (size) {
      case 'xs':
        return '0.95rem'
      case 'sm':
        return '1.25rem'
      default:
        return '1.5rem'
    }
  }
  
  const letterWeight = () => {
    switch (weight) {
      case 'light':
        return 300
      case 'medium':
        return 400
      case 'bold':
        return 700
      default:
        return 300
    }
  }

  return (
    <Typography
      variant='h5'
      fontWeight={letterWeight()}
      fontSize={letterSize()}
      {...rest}
    >
      {text || children}
    </Typography>
  )
}

export default Heading5
