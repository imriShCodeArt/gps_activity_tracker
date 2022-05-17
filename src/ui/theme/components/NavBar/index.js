import React from 'react'

import {
  AppBar as Root,
  Box,
  Card,
  CardActionArea,
  Typography,
  useTheme,
} from '@mui/material'

import Home from '@mui/icons-material/Home'
import StartRounded from '@mui/icons-material/StartRounded'
import Person from '@mui/icons-material/Person'

function NavBar() {
  const NavBtn = ({ icon, text }) => {
    return (
      <Card sx={{ flexGrow: 2 }} elevation={0}>
        <CardActionArea sx={{ height: '4em', width: '100%' }}>
          <Box textAlign={'center'} color={useTheme().palette.primary.main}>
            {icon}
          </Box>
          <Box textAlign={'center'} color={useTheme().palette.primary.main}>
            <Typography>{text}</Typography>
          </Box>
        </CardActionArea>
      </Card>
    )
  }
  return (
    <Root
      position='static'
      color='secondary'
      sx={{
        maxHeight: '4em',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <NavBtn text={'Home'} icon={<Home />} />
      <NavBtn text={'Record'} icon={<StartRounded />} />
      <NavBtn text={'Profile'} icon={<Person />} />
    </Root>
  )
}

export default NavBar
