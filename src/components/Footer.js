import React from 'react'
import propTypes from 'prop-types'
import { IconButton, Icon, withStyles } from '@material-ui/core'
import { Facebook, Instagram } from 'mdi-material-ui'

const styles = theme => ({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.common.white,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    boxShadow: theme.shadows[4],
  },
})

const Footer = ({ classes }) => (
  <div className={classes.footer}>
    <IconButton
      href="https://www.instagram.com/monoblocproject/?hl=fr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram />
    </IconButton>
    <IconButton
      href="https://fr-fr.facebook.com/MonoblocProject/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook />
    </IconButton>
    <IconButton
      href="mailto:monoblocproject@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon>mail_outline</Icon>
    </IconButton>
  </div>
)

Footer.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
