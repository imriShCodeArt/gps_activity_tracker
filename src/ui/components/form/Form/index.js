import { Box } from '@mui/material'
import React from 'react'

function Form({ handleChange, onSubmit, title, subHeader, children }) {
  return (
    <Box
        component={'form'}
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}
        onChange={handleChange}
    >
        {title}
        {subHeader}

        {children}

    </Box>
  )
}

export default Form