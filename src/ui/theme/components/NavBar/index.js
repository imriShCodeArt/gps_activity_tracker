import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar as Root,
  Box,
  Card,
  CardActionArea,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

function NavBar({ links }) {
  const NavBtn = ({ icon, text, href }) => {
    return (
      <Card sx={{ flexGrow: 2 }} elevation={0}>
        <CardActionArea
          onClick={() => window.location.assign(href || '/')}
          sx={{ width: '100%', height: { xs: '4em', md: '2.5em' } }}
        >
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              padding:{ xs: 'auto', md:'0em .55em'}
            }}
            textAlign={'center'}
            color={useTheme().palette.primary.main}
          >
            {icon}
            <Typography>{text}</Typography>
          </Box>
          <Box
            textAlign={'center'}
            color={useTheme().palette.primary.main}
          ></Box>
        </CardActionArea>
      </Card>
    )
  }
  return (
    <Root
      color='secondary'      
      position='fixed'
      sx={{
        top: { xs: `${window.innerHeight - 62}px`, md: '3.5em' },
        height: '2em',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: '4em', md: '2.5em' },
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#FFF',
          pr: { xs: 0, md: '65%' },
        }}
      >
        {links &&
          links.map((link, index) => {
            return <NavBtn key={index} {...link} />
          })}
      </Toolbar>
    </Root>
  )
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, icon: PropTypes.element })
  ),
}

export default NavBar
