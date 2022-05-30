import { Typography } from '@mui/material'
import React from 'react'

function Heading5({ text, children, ...rest }) {
  return (
    <Typography variant='h5' {...rest} >
        { text || children }
    </Typography>
  )
}

export default Heading5