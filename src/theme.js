import { createMuiTheme } from '@material-ui/core'
import secondary from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      ...secondary,
      main: secondary[400],
      contrastText: '#fff',
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
  overrides: {
    MuiMobileStepper: {
      dotActive: {
        backgroundColor: secondary.A700,
      },
    },
  },
})
