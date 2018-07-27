import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import memoizeOne from 'memoize-one'

const styles = {
  box: {
    position: 'absolute',
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 1,
  },
}

class Box extends React.Component {
  _computeStyle = memoizeOne(
    ({ width, height, bottomRightX, bottomRightY, topLeftX, topLeftY }) => {
      const top = Math.floor(topLeftY * height)
      const left = Math.floor(topLeftX * width)
      const boxWidth = Math.floor((bottomRightX - topLeftX) * width)
      const boxHeight = Math.floor((bottomRightY - topLeftY) * height)
      return { top, left, width: boxWidth, height: boxHeight }
    }
  )

  render() {
    const {
      classes,
      width,
      height,
      bottomRightX,
      bottomRightY,
      topLeftX,
      topLeftY,
    } = this.props

    return (
      <div
        className={classes.box}
        style={this._computeStyle({
          width,
          height,
          bottomRightX,
          bottomRightY,
          topLeftX,
          topLeftY,
        })}
      />
    )
  }
}

Box.propTypes = {
  classes: propTypes.object.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  bottomRightX: propTypes.number.isRequired,
  bottomRightY: propTypes.number.isRequired,
  topLeftX: propTypes.number.isRequired,
  topLeftY: propTypes.number.isRequired,
}

export default withStyles(styles)(Box)
