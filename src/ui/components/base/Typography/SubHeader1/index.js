import { Typography } from '@mui/material'
import React from 'react'

function SubHeader1({ text, children, ...rest }) {
  return (
    <Typography variant='subtitle1' textTransform={'uppercase'} fontSize={'.65rem'} fontWeight={700} letterSpacing={2} {...rest} >
        { text || children }
    </Typography>
  )
}

export default SubHeader1