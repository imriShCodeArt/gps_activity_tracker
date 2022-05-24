import React from 'react'

import { Fab as Root } from '@mui/material'

function Fab({ icon, onClick }) {
  return (
    <Root onClick={onClick} color='primary' sx={{color:'#FFF'}}>
        {icon}
    </Root>
  )
}

export default Fab