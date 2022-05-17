import React from 'react'

import {
  AppBar as Root,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'

import NotificationsActiveOutlined from '@mui/icons-material/NotificationsActiveOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'

import PropTypes from 'prop-types'

function AppBar({ pageTitle, settingsAction }) {
  const x = 10
  console.log(x)
  
  return (
    <Root sx={{ height: '4em' }} position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography color={'Menu'}>{pageTitle}</Typography>
        <ButtonGroup>
          <IconButton>
            <NotificationsActiveOutlined color='action' />
          </IconButton>
          <IconButton onClick={settingsAction}>
            <SettingsOutlined color='action' />
          </IconButton>
        </ButtonGroup>
      </Toolbar>
    </Root>
  )
}

AppBar.propTypes = {
  pageTitle: PropTypes.string,
  settingsAction: PropTypes.func
}


export default AppBar
