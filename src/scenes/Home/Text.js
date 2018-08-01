import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  text: {
    marginBottom: 30,
    textAlign: 'justify',
  },
}

const Text = ({ classes, children }) => (
  <Typography className={classes.text}>{children}</Typography>
)

Text.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
}

export default withStyles(styles)(Text)
