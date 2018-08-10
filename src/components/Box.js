import React from 'react'
import propTypes from 'prop-types'
import { Icon, Button, withStyles } from '@material-ui/core'
import memoizeOne from 'memoize-one'

const styles = theme => ({
  box: {
    position: 'absolute',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
    borderWidth: 2,
  },
  iconBtn: {
    position: 'absolute',
    right: -20,
    top: -20,
  },
})

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
      onRemove,
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
      >
        {' '}
        {onRemove && (
          <Button
            variant="fab"
            mini
            color="secondary"
            aria-label="Remove"
            className={classes.iconBtn}
            onClick={onRemove}
          >
            <Icon>close</Icon>
          </Button>
        )}
      </div>
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
  onRemove: propTypes.func,
}

export default withStyles(styles)(Box)
