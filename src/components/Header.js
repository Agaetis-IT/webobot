import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit">
        The monobloc project
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Header
