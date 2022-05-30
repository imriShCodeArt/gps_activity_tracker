import { Typography } from '@mui/material'
import React from 'react'

function Heading4({ text, children, ...rest }) {
  return (
    <Typography variant='h4' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading4