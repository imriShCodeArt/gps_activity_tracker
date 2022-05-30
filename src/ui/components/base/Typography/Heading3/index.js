import { Typography } from '@mui/material'
import React from 'react'

function Heading3({ text, children, ...rest }) {
  return (
    <Typography variant='h3' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading3