import React, { useState } from 'react'
import { Box, Drawer as Root, IconButton } from '@mui/material'

import PropTypes from 'prop-types'
import Close from '@mui/icons-material/Close'

function Drawer({ anchor, open, close, children }) {
  return (
    <Root anchor={anchor} open={open} onClose={close}>
      <IconButton
        onClick={close}
        color='info'
        sx={{ position: 'absolute', top: '.45em', right: '.25em' }}
      >
        <Close />
      </IconButton>
      <Box width={'100vw'} padding={'3em'}>
        {children}
      </Box>
    </Root>
  )
}

Drawer.propTypes = {
  anchor: PropTypes.oneOf(['right', 'left', 'top', 'bottom']),
  open: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.element
}

export default Drawer
