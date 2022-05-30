import { Typography } from '@mui/material'
import React from 'react'

function Heading1({ text, children, ...rest }) {
  return (
    <Typography variant='h1' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading1