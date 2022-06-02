import React from 'react'
import { Typography } from '@mui/material'

function Body1({ text, children, ...rest }) {
  return (
    <Typography variant='body1' {...rest}>
      {text || children}
    </Typography>
  )
}

export default Body1
