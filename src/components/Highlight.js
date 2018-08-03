import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  span: {
    position: 'relative',
    display: 'inline-block',
  },
  background: {
    position: 'absolute',
    backgroundColor: theme.palette.secondary.main,
    zIndex: -10,
    top: 10,
    left: 7,
    width: '100%',
    height: '70%',
  },
})

const Title = ({ classes, children }) => (
  <span className={classes.span}>
    {children}
    <div className={classes.background} />
  </span>
)

Title.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
}

export default withStyles(styles)(Title)
