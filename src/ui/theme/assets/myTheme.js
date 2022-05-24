import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

export default () => {
  return createTheme({
    palette: {
      primary: {
        main: orange['A700'],
      },
      secondary: {
        main: '#FFF',
      },
      action: {
        active: '#FFF',
      },
    },
  })
}
