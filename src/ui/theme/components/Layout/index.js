import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import React from 'react'

function Layout({ children }) {
  return (
    <Grid
      bgcolor={'#eee'}
      container
      minHeight={'calc(100vh - 4em)'}
      paddingBottom={'8em'}
      
    >
      {children}
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout
