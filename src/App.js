import React from 'react'
import { CssBaseline, MuiThemeProvider, withStyles } from '@material-ui/core'
import Routes from './Routes'
import theme from './theme'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ScrollManager from 'components/ScrollManager'
import { BrowserRouter } from 'react-router-dom'

const styles = {
  '@global': {
    '#root': {
      minHeight: '100vh',
      height: '100%',
      position: 'relative',
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
}

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <ScrollManager>
        <Header />
        <Routes />
        <Footer />
      </ScrollManager>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default withStyles(styles)(App)
