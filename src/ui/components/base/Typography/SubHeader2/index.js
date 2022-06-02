import { Typography } from '@mui/material'
import React from 'react'

function SubHeader2({ text, children, size, weight, ...rest }) {
  const letterSize = () => {
    switch (size) {
      case 'xs':
        return '.30rem'
      case 'sm':
        return '.45rem'
      case 'lg':
        return '.95rem'
      case 'xlg':
        return '1.1rem'
      default:
        return '.65rem'
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
    <Typography variant='subtitle1' textTransform={'uppercase'} fontSize={letterSize()} fontWeight={700} letterSpacing={2} {...rest} >
        { text || children }
    </Typography>
  )
}

export default SubHeader2