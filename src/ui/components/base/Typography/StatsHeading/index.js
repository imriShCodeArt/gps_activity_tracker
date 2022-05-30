import { Typography } from '@mui/material'
import React from 'react'

function StatsHeading({ text, children, ...rest }) {
  return (
    <Typography variant='subtitle2' textTransform={'uppercase'} color='#bbb' fontSize={'.55rem'} fontWeight={700} letterSpacing={2} {...rest} >
        { text || children }
    </Typography>
  )
}

export default StatsHeading