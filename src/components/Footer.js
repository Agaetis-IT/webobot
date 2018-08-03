import React from 'react'
import propTypes from 'prop-types'
import { IconButton, Icon, withStyles } from '@material-ui/core'
import { Facebook, Twitter } from 'mdi-material-ui'

const styles = theme => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    boxShadow: theme.shadows[4],
  },
})

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <IconButton href="mailto:contact@monobot.fr">
      <Facebook />
    </IconButton>
    <IconButton href="mailto:contact@monobot.fr">
      <Twitter />
    </IconButton>
    <IconButton href="mailto:contact@monobot.fr">
      <Icon>mail_outline</Icon>
    </IconButton>
  </div>
)

Footer.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
