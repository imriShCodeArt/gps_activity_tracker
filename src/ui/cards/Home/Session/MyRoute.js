import Grid from '@mui/material/Grid'
import React from 'react'
import SessionRoute from './components/SessionRoute'

function MyRoute({ route }) {
  //  Map Component
  return (
    <Grid
      item
      height={'150px'}
      width={'100%'}
      borderRadius='6px'
      overflow={'hidden'}
    >
      <SessionRoute {...route} />
    </Grid>
  )
}

export default MyRoute
