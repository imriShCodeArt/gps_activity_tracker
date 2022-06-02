import { Divider, Grid } from '@mui/material'
import React from 'react'
import AccountHeader from '../../cards/Profile/AccountHeader'
import YearlySummary from '../../cards/Profile/YearlySummary'
import WeeklySummary from '../../cards/Profile/WeeklySummary'

function Profile() {
  return (
    <Grid item xs={12}>
      <AccountHeader />
      <Divider sx={{height:'.55rem'}} />
      <WeeklySummary />
      <Divider sx={{height:'.55rem'}} />
      <YearlySummary />
    </Grid>
  )
}

export default Profile