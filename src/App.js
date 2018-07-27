import React, { Fragment } from 'react'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import Routes from './Routes'
import theme from './theme'
import Header from 'components/Header'

const App = () => (
  <Fragment>
    <Header />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  </Fragment>
)

export default App
