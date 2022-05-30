import { Typography } from '@mui/material'
import React from 'react'

function Heading6({ text, children, ...rest }) {
  return (
    <Typography variant='h6' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading6