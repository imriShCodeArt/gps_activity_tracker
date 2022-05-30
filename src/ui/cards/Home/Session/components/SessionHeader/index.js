import { RunCircleOutlined } from '@mui/icons-material'
import { CardHeader } from '@mui/material'
import React from 'react'

import Avatar from '../../../../../components/base/Avatar'

function SessionHeader({ name, date }) {
  const tmpDate = new Date(),
    h = tmpDate.getHours(),
    min = tmpDate.getMinutes(),
    dmy = tmpDate.toLocaleDateString()
  return (
    <CardHeader
      avatar={<Avatar />}
      title={name}
      subheader={
        <>
          <RunCircleOutlined sx={{fontSize: '.75rem'}} />
          {`${dmy}, at ${h < 10 ? 0 : ''}${h}:${min < 10 ? 0 : ''}${min}`}
        </>
      }
      sx={{
        pt:'1rem',
        pb:'0rem',
      }}
    />
  )
}

SessionHeader.defaultProps = {
  name: 'Imri Wainberg',
}

export default SessionHeader
