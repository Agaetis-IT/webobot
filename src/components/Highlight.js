import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  span: {
    position: 'relative',
    display: 'inline-block',
  },
  background: {
    position: 'absolute',
    backgroundColor: theme.palette.secondary.main,
    zIndex: -10,
    top: '0.4em',
    left: '0.2em',
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
