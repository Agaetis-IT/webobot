import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { getPictureUrl } from 'services/mediobot'
import { withStyles } from '@material-ui/core'
import Box from './Box'
import CustomBox from './CustomBox'

const styles = {
  root: {},
  imgContainer: {
    position: 'relative',
  },
  img: {
    userSelect: 'none',
    pointerEvents: 'none',
  },
  editable: {
    cursor: 'crosshair',
  },
}

class Picture extends React.Component {
  state = {
    width: 0,
    height: 0,
    customBoxes: [],
  }

  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }

  _onLoad = ({ target: img }) =>
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth,
    })

  _onPointerDown = ({ clientX, clientY }) => {
    const { offsetLeft, offsetTop } = this.containerRef.current
    this.setState({ x0: clientX - offsetLeft, y0: clientY - offsetTop })
  }

  _onPointerUp = ({ clientX, clientY }) => {
    const { offsetLeft, offsetTop } = this.containerRef.current
    this.setState(({ customBoxes, x0, y0 }) => ({
      customBoxes: [
        ...customBoxes,
        {
          x0,
          y0,
          x1: clientX - offsetLeft,
          y1: clientY - offsetTop,
        },
      ],
    }))
  }

  render() {
    const {
      classes,
      id,
      author,
      detections,
      showBoxes,
      threshold,
      editable,
    } = this.props
    const { width, height, customBoxes } = this.state

    return (
      <div className={classes.root}>
        <div
          className={classnames(classes.imgContainer, {
            [classes.editable]: editable,
          })}
          onPointerDown={this._onPointerDown}
          onPointerUp={this._onPointerUp}
          ref={this.containerRef}
          style={{ width, height }}
        >
          <img
            className={classes.img}
            src={getPictureUrl(id)}
            alt={author}
            onLoad={this._onLoad}
          />
          {showBoxes &&
            detections
              .filter(({ score }) => score > threshold)
              .map(({ box }, index) => (
                <Box key={index} {...box} width={width} height={height} />
              ))}
          {customBoxes.map((box, index) => <CustomBox key={index} {...box} />)}
        </div>
        <p>Detections : {detections.length}</p>
      </div>
    )
  }
}

Picture.propTypes = {
  classes: propTypes.object.isRequired,
  id: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  threshold: propTypes.number,
  showBoxes: propTypes.bool,
  editable: propTypes.bool,
  detections: propTypes.arrayOf(
    propTypes.shape({
      box: propTypes.shape({
        bottomRightX: propTypes.number.isRequired,
        bottomRightY: propTypes.number.isRequired,
        topLeftX: propTypes.number.isRequired,
        topLeftY: propTypes.number.isRequired,
      }).isRequired,
      label: propTypes.string.isRequired,
      score: propTypes.number.isRequired,
    })
  ).isRequired,
}

Picture.defaultProps = {
  threshold: 0,
}

export default withStyles(styles)(Picture)
