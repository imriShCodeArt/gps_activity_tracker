import { Box, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import AppBar from './components/AppBar'

import Layout from './components/Layout'
import NavBar from './components/NavBar'
import myTheme from './assets/myTheme'
import PropTypes from 'prop-types'
import Drawer from './components/Drawer'
import Settings from '../cards/Settings'

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
  // **********DRAWER PROPS**********

  /**
   * SETTINGS PROPS
   */
  function handleParamChange(paramName, paramValue) {
    console.log(paramName, paramValue)
  }
  // **********SETTINGS PROPS**********

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
      <Box position={'fixed'} bottom={'1em'} width={'100vw'} >
        <NavBar />
      </Box>
    </ThemeProvider>
  )
}

Theme.defaultProps = {
  pageTitle: 'Home',
  theme: myTheme,
}

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  pageTitle: PropTypes.string.isRequired,
}

export default Theme
