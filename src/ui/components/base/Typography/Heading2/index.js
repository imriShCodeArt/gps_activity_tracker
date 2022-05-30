import { Typography } from '@mui/material'
import React from 'react'

function Heading2({ text, children, ...rest }) {
  return (
    <Typography variant='h2' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading2