import { createMuiTheme } from '@material-ui/core'
import secondary from '@material-ui/core/colors/grey'
import primary from '@material-ui/core/colors/teal'

export default createMuiTheme({
  palette: {
    primary,
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
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#fff',
      },
    },
    MuiButton: {
      contained: {
        backgroundColor: '#fff',
      },
    },
  },
})
