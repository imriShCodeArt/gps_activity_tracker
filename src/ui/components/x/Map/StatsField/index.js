import Box from '@mui/material/Box'
import React from 'react'
import StatsHeading from '../../../base/Typography/StatsHeading'
import StatsValue from '../../../base/Typography/StatsValue'

function StatsField({ title, value, titleColor, ...rest }) {
  return (
    <Box px={1} item {...rest}>
      <StatsHeading color={titleColor || 'inherit'} text={title} />
      <StatsValue text={value} />
    </Box>
  )
}

export default StatsField
