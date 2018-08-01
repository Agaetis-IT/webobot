import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import {
  AppBar,
  Button,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
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
  list: {
    width: 300,
  },
}

const menu = [
  { name: 'Le projet', href: '/project' },
  { name: 'Contribuer', href: '/contribute' },
]

class Header extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      open,
    })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <Fragment>
        <AppBar position="absolute" color="primary">
          <Toolbar className={classes.toolbar}>
            <Link to="/">
              <Typography variant="title">The monobloc project</Typography>
            </Link>
            <Hidden smDown implementation="css">
              {menu.map(({ name, href }) => (
                <Link key={name} to={href}>
                  <Button>{name}</Button>
                </Link>
              ))}
            </Hidden>
            <Hidden mdUp implementation="css">
              <IconButton onClick={this.toggleDrawer(true)}>
                <Icon>menu</Icon>
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>

        <Drawer open={open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List>
                {menu.map(({ name, href }) => (
                  <Link key={name} to={href}>
                    <ListItem button>
                      <ListItemText primary={name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </div>
        </Drawer>
      </Fragment>
    )
  }
}

Header.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Header)
