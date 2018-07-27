import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import memoizeOne from 'memoize-one'

const styles = {
  box: {
    position: 'absolute',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
  },
}

class CustomBox extends React.Component {
  _computeStyle = memoizeOne(({ x0, y0, x1, y1 }) => {
    const left = x1 < x0 ? x1 : x0
    const top = y1 < y0 ? y1 : y0
    const width = Math.abs(x1 - x0)
    const height = Math.abs(y1 - y0)

    return { top, left, width, height }
  })

  render() {
    const { classes, x0, x1, y0, y1 } = this.props

    return (
      <div
        className={classes.box}
        style={this._computeStyle({
          x0,
          y0,
          x1,
          y1,
        })}
      />
    )
  }
}

CustomBox.propTypes = {
  classes: propTypes.object.isRequired,
  x0: propTypes.number.isRequired,
  x1: propTypes.number.isRequired,
  y0: propTypes.number.isRequired,
  y1: propTypes.number.isRequired,
}

export default withStyles(styles)(CustomBox)
