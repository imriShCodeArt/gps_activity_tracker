import { Card, CardContent, Grid, useTheme } from '@mui/material'
import React from 'react'
import SessionHeader from './components/SessionHeader'

function Root({ meta, children }) {
  return (
    <Grid item xs={12}>
      <Card sx={{ bgcolor: useTheme().palette.grey[100], cursor: 'pointer' }}>
        <SessionHeader {...meta} />
        <CardContent>
          <Grid container>{children}</Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Root
