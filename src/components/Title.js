import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Highlight from './Highlight'

const styles = theme => ({
  title: {
    marginBottom: 20,
  },
})

const Title = ({ classes, children }) => (
  <Typography variant="title" className={classes.title}>
    <Highlight>{children}</Highlight>
  </Typography>
)

Title.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
}

export default withStyles(styles)(Title)