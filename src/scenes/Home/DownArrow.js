import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Icon, withStyles } from '@material-ui/core'
import { bounce } from 'react-animations'

const styles = theme => ({
  container: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    bottom: 0,
    left: 0,
    height: '15%',
    cursor: 'pointer',
  },
  arrow: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    bottom: 5,
    left: 0,
    fontSize: 64,
    color: theme.palette.primary.main,
    animationName: 'bounce',
    animationDuration: '1s',
    animationIterationCount: 'infinite',
  },
  '@keyframes bounce': bounce,
})

class DownArrow extends Component {
  render() {
    const { classes, ...props } = this.props
    return (
      <div className={classes.container}>
        <Icon className={classes.arrow} {...props}>
          expand_more
        </Icon>
      </div>
    )
  }
}

DownArrow.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(DownArrow)
