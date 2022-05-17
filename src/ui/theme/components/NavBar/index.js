import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar as Root,
  Box,
  Card,
  CardActionArea,
  Typography,
  useTheme,
} from '@mui/material'

function NavBar({ links }) {
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
      {links &&
        links.map((link, index) => {
          return <NavBtn key={index} text={link.text} icon={link.icon} />
        })}
    </Root>
  )
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.element })
  ),
}

export default NavBar
