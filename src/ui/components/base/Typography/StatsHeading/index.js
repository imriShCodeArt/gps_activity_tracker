import { Typography } from '@mui/material'
import React from 'react'

function StatsHeading({ text, children, dark, ...rest }) {
  return (
    <Typography
      variant='subtitle2'
      textTransform={'uppercase'}
      fontSize='.55rem'
      fontWeight={500}
      letterSpacing={2}
      {...rest}
    >
      {text || children}
    </Typography>
  )
}

export default StatsHeading
