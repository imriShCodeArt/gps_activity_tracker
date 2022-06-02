import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import React from 'react'

function Layout({ children }) {
  return (
    <Stack
      bgcolor={'#eee'}
      minHeight={'calc(100vh - 4em)'}
      paddingBottom={'8em'}
      width='100%'
      direction={'column'}
      sx={{
        pt:{xs: '0em', md: '2.025em'}
      }}
    >
      {children}
    </Stack>
  )
}

export default Layout
