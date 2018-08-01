import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginTop: 80,
    marginBottom: 80,
  },
}

const Contribute = ({ classes }) => (
  <div className={classes.root}>
    <Typography>Contribuer</Typography>
  </div>
)

Contribute.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Contribute)