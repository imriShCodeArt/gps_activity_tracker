import React from 'react'

import { TextField as Root } from '@mui/material'

function TextField({ text, label, id, placeholder, ...rest }) {
  return (
    <Root
      placeholder={(!label && text) || placeholder }
      label={label && text}
      variant='standard'
      {...rest}
      id={id}
    />
  )
}

export default TextField
