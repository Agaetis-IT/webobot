import React, { Fragment } from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Routes from './Routes'
import theme from './theme'

const App = () => (
  <Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  </Fragment>
)

export default App
