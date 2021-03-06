import { Box, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import AppBar from './components/AppBar'

import Layout from './components/Layout'
import NavBar from './components/NavBar'
import myTheme from './assets/myTheme'
import PropTypes from 'prop-types'
import Drawer from './components/Drawer'
import Settings from '../cards/Misc/Settings'
import { Home, Person, StartRounded } from '@mui/icons-material'

function Theme({ children, theme, pageTitle }) {
  /**
   * DRAWER PROPS
   */
  const [drawerAnchor, setDrawerAnchor] = useState('right')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerContent, setDrawerContent] = useState(null)
  function drawerSetClose() {
    setDrawerOpen(false)
  }
  function drawerSetOpen(content) {
    setDrawerOpen(true)
    setDrawerContent(content)
  }

  /**
   * SETTINGS PROPS
   */
  function handleParamChange(paramName, paramValue) {
    console.log(paramName, paramValue)
  }
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        children={drawerContent}
        open={drawerOpen}
        anchor={drawerAnchor}
        close={drawerSetClose}
      />
      <AppBar
        settingsAction={() =>
          drawerSetOpen(<Settings updateParam={handleParamChange} />)
        }
        pageTitle={pageTitle}
      />
      <Layout>{children}</Layout>

      <NavBar
        links={[
          { text: 'Home', href: '/', icon: <Home fontSize={'small'} /> },
          { text: 'Record', href: '/record', icon: <StartRounded fontSize={'small'} /> },
          { text: 'Profile', href: '/profile', icon: <Person fontSize={'small'} /> },
        ]}
      />
    </ThemeProvider>
  )
}

Theme.propTypes = {
  theme: PropTypes.object,
  pageTitle: PropTypes.string.isRequired,
}

Theme.defaultProps = {
  pageTitle: 'You',
  theme: myTheme(),
}

export default Theme
