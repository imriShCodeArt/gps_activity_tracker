import { useTheme } from '@mui/material'
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

export default Layout
