import Theme from './ui/theme'
import Session from './ui/cards/Home/Session'
import React from 'react'
import { Grid } from '@mui/material'

function App() {
  const tmp = {
    meta: {fName: 'Imri',lName: 'Wain',activityType: 'run',dateTime: new Date().toISOString(),},
    performance: [{title: 'Distance',value: '1 km',},{title: 'Pace',value: '7:40 / km',},{title: 'Time',value: '53 m 2 s',},],}

  return (
    <Theme>
      <Session {...tmp} />
      <Session {...tmp} />
    </Theme>
  )
}

export default App
