import Grid from '@mui/material/Grid'
import React from 'react'
import SessionStats from './components/SessionStats'
import Splits from './components/Splits'
import MyRoute from './MyRoute'
import Root from './Root'

function Session({ meta, route, performance }) {
  return (
    <Root {...meta}>
      <Grid xs={12} sm={4} item container>
        <MyRoute {...route} />
      </Grid>
      <Grid pl={{ xs: 0, sm: 2 }} xs={12} sm={8} item container>
        <SessionStats stats={performance} />
        <Splits />
      </Grid>
      <Grid xs={12} md={8} item container>
      </Grid>
    </Root>
  )
}

Session.defaultProps = {
  meta: {},
  performance: [],
}

export default Session
