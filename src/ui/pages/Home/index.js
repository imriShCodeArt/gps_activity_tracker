import { Divider, Grid } from '@mui/material'
import React from 'react'
import Session from '../../cards/Home/Session'

function Home({ items }) {
  const Story = () =>
    items.map((item, index) => (
      <div key={index}>
        <Divider sx={{ height: '.75em' }} />
        <Session {...item} />
      </div>
    ))

  return <Story />
}

Home.defaultProps = {
  items: [
    {
      meta: {
        fName: 'Imri',
        lName: 'Wain',
        activityType: 'run',
        dateTime: new Date().toISOString(),
      },
      performance: [
        { title: 'Distance', value: '1 km' },
        { title: 'Pace', value: '7:40 / km' },
        { title: 'Time', value: '53 m 2 s' },
      ],
    },
    {
      meta: {
        fName: 'Imri',
        lName: 'Wain',
        activityType: 'run',
        dateTime: new Date().toISOString(),
      },
      performance: [
        { title: 'Distance', value: '1 km' },
        { title: 'Pace', value: '7:40 / km' },
        { title: 'Time', value: '53 m 2 s' },
      ],
    },
  ],
}

export default Home
