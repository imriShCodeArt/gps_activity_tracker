import React from 'react'

import { IconButton as Root } from '@mui/material'

function Primary({ children, icon, onClick }) {
  return (
    <Root onClick={onClick} >
        { icon || children }
    </Root>
  )
}

export default Primary