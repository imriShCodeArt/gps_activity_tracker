import { Typography } from '@mui/material'
import React from 'react'

function SubHeader1({ text, children, size, weight, ...rest }) {
  const letterSize = () => {
    switch (size) {
      case 'xs':
        return '.45rem'
      case 'sm':
        return '.65rem'
      case 'lg':
        return '1.35rem'
      default:
        return '.85rem'
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
        return 500
    }
  }
  return (
    <Typography
      variant='subtitle1'
      fontSize={letterSize()}
      fontWeight={letterWeight()}
      letterSpacing={2}
      {...rest}
    >
      {text || children}
    </Typography>
  )
}

export default SubHeader1
