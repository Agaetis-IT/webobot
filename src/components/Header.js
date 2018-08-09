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
import logoImg from 'images/logo.jpg'

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },
  logo: {
    height: 28,
    borderRadius: '50%',
    marginRight: 5,
  },
  list: {
    width: 330,
  },
  drawerHeader: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: 15,
    paddingBottom: 15,
    color: '#fff',
    textAlign: 'center',
  },
})

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
              <div className={classes.titleContainer}>
                <img src={logoImg} alt="logo" className={classes.logo} />
                <Typography variant="title" className={classes.title}>
                  The monobloc project
                </Typography>
              </div>
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
          <div className={classes.list}>
            <Typography variant="title" className={classes.drawerHeader}>
              The monobloc project
            </Typography>
            <List>
              {menu.map(({ name, href }) => (
                <Link key={name} to={href}>
                  <ListItem
                    button
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                  >
                    <ListItemText primary={name} />
                  </ListItem>
                </Link>
              ))}
            </List>
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
