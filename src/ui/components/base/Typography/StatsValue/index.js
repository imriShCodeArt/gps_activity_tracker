import { Typography } from '@mui/material'
import React from 'react'

function StatsValue({ text, children}) {
  return (
    <Typography
      variant='body1'
      textTransform={'uppercase'}
      color={'GrayText'}
      fontSize={'.75rem'}
      fontWeight={500}
    >
      {text || children}
    </Typography>
  )
}

export default StatsValue
