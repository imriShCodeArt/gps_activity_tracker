import { RunCircleOutlined } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Stack } from '@mui/material'
import React from 'react'
import SubHeader1 from 'base/Typography/SubHeader1'
import StatsField from 'x/StatsField'
import TrendTable from './components/TrendTable'

function WeeklySummary() {
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction={'row'} alignItems='center'>
            <RunCircleOutlined /> <SubHeader1 text='This week' />
          </Stack>
        }
      />
      <CardContent>
        <Stack direction={'row'}>
          <StatsField title={'Distance'} value={'0'} />
          <StatsField title={'Time'} value={'0'} />
          <StatsField title={'Elevation Gain'} value={'0'} />
        </Stack>
        <TrendTable />
      </CardContent>
    </Card>
  )
}

export default WeeklySummary
