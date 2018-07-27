import React, { Fragment } from 'react'
import { CssBaseline, MuiThemeProvider, withStyles } from '@material-ui/core'
import Routes from './Routes'
import theme from './theme'
import Header from 'components/Header'

const styles = {
  '@global': {
    '#root': {
      minWidth: '100vw',
      minHeight: '100vh',
    },
  },
}

const App = () => (
  <Fragment>
    <Header />
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
  </Fragment>
)

export default withStyles(styles)(App)
