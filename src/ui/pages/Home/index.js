import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'

function Home({ posts }) {
  const Story = posts.map(({ title, dateTime, runDistance, runTime }, index) => {
    const header = (
      <CardHeader
        title={title}
        subheader={<Typography>{dateTime}</Typography>}
      />
    )
    const text = (
      <CardContent>
        {' '}
        Distance: {runDistance} | Time:{' '}
        {`${Math.round(runTime / 60)} : ${(runTime / 60) % 1}`}{' '}
      </CardContent>
    )

    return (
      <Grid key={index} item xs={12}>
        <Card>
          {header}
          {text}
        </Card>
      </Grid>
    )
  })

  return (
    <Grid alignContent={'flex-start'} spacing={2} xs={12} item container>
      {Story}
    </Grid>
  )
}

export default Home
