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
    top: 15,
    left: 10,
    width: '100%',
    height: '70%',
  },
  title: {
    marginBottom: 20,
    zIndex: 10,
  },
})

const Title = ({ classes, children }) => (
  <Typography variant="title" className={classes.title}>
    <span className={classes.span}>
      {children}
      <div className={classes.background} />
    </span>
  </Typography>
)

Title.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
}

export default withStyles(styles)(Title)
