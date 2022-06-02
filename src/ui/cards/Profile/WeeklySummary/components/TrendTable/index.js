import { Grid, useTheme } from '@mui/material'
import React, { useState } from 'react'

function TrendTable({ weeks }) {
    const {main, light} = useTheme().palette.primary
    const [isActive, setIsActive] = useState(false)
  const Dot = ({ height, active }) => {
    return(
    <div
      style={{
        width: '1rem',
        height: '1rem',
        backgroundColor: isActive ? main : '#FFF',
        borderRadius: '50%',
        border: `5px solid ${light}`,
        position: 'relative',
        top: `calc(${height ? 100 - height : 100}% - .5em)`,
        left: '-0.5em',
      }}
      id={'indicator-dot-orange'}
    ></div>
  )}

  const WeeksList = () =>
    weeks.map(({ height, startDate, endDate }, index) => {
      return (
        <Grid key={index} borderRight={`1px solid #ccc`} xs={1} item>
          <Dot height={height} />
        </Grid>
      )
    })

  return (
    <Grid width={'100%'} height={'25vh'} container border={`1px solid #ccc`}>
      <WeeksList />
    </Grid>
  )
}

TrendTable.defaultProps = {
  weeks: [
    { height: 10, startDate: '', endDate: '' },
    { height: 0, startDate: '', endDate: '' },
    { height: 35, startDate: '', endDate: '' },
    { height: 57, startDate: '', endDate: '' },
    { height: 82, startDate: '', endDate: '' },
    { height: 100, startDate: '', endDate: '' },
    { height: 60, startDate: '', endDate: '' },
    { height: 45, startDate: '', endDate: '' },
    { height: 50, startDate: '', endDate: '' },
    { height: 25, startDate: '', endDate: '' },
    { height: 0, startDate: '', endDate: '' },
    { height: 12, startDate: '', endDate: '' },
  ],
}

export default TrendTable
