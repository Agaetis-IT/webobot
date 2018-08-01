import React from 'react'
import propTypes from 'prop-types'
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

const Header = ({ classes }) => (
  <AppBar position="absolute" color="primary">
    <Toolbar className={classes.toolbar}>
      <Link to="/">
        <Typography variant="title">The monobloc project</Typography>
      </Link>
      <Hidden smDown implementation="css">
        <Link to="/">
          <Button>Le projet</Button>
        </Link>
        <Link to="/">
          <Button>Contribuer</Button>
        </Link>
      </Hidden>
      <Hidden mdUp implementation="css">
        <IconButton>
          <Icon>menu</Icon>
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Header)
