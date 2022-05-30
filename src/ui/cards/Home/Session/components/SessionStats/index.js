import { Grid } from '@mui/material'
import React from 'react'
import StatsHeading from '../../../../../components/base/Typography/StatsHeading'
import StatsValue from '../../../../../components/base/Typography/StatsValue'

function SessionStats({ stats }) {
  const Item = ({ title, value }) => {
    return (
      <Grid px={1} item xs={4}>
        <StatsHeading text={title} />
        <StatsValue text={value} />
      </Grid>
    )
  }
  return (
    <Grid item container xs={12} sm={8}>
        {stats.map(({ title, value }, index) => {
          return <Item key={index} title={title} value={value} />
        })}
    </Grid>
  )
}

export default SessionStats
