import { createMuiTheme } from '@material-ui/core'
import secondary from '@material-ui/core/colors/teal'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      ...secondary,
      main: secondary.A700,
    },
  },
  typography: {
    fontFamily: ['Quicksand', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    title: {
      fontSize: 28,
    },
    body1: {
      fontSize: 16,
    },
  },
})
