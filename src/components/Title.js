import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Highlight from './Highlight'
import classNames from 'classnames'

const styles = {
  title: {
    marginBottom: 20,
  },
}

const Title = ({ classes, children, className }) => (
  <Typography variant="title" className={classNames(classes.title, className)}>
    <Highlight>{children}</Highlight>
  </Typography>
)

Title.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
  className: propTypes.string,
}

export default withStyles(styles)(Title)
