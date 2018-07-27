import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { getPictureUrl } from 'services/mediobot'
import { withStyles } from '@material-ui/core'
import Box from './Box'
import CustomBox from './CustomBox'

const styles = {
  imgContainer: {
    userSelect: 'none',
    position: 'relative',
    maxWidth: '100%',
  },
  img: {
    maxWidth: '100%',
  },
  editable: {
    cursor: 'crosshair',
  },
}

class Picture extends React.Component {
  state = {
    imgLoaded: false,
    width: '100%',
    height: '100%',
    customBoxes: [],
    currentBox: {
      x0: null,
      x1: null,
      y0: null,
      y1: null,
    },
  }

  constructor(props) {
    super(props)
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('resize', this._onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize)
  }

  _onResize = () => {
    const { offsetHeight, offsetWidth } = this.imageRef.current
    this.setState({
      height: offsetHeight,
      width: offsetWidth,
    })
  }

  _onLoad = ({ target: img }) =>
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth,
      imgLoaded: true,
    })

  _onPointerDown = ({ clientX, clientY }) => {
    const { left, top } = this.imageRef.current.getBoundingClientRect()
    this.setState({
      mouseDown: true,
      currentBox: {
        x0: clientX - left,
        y0: clientY - top,
        x1: null,
        y1: null,
      },
    })
  }

  _onPointerMove = ({ clientX, clientY }) => {
    if (this.state.mouseDown) {
      const { left, top } = this.imageRef.current.getBoundingClientRect()
      this.setState(({ currentBox }) => ({
        currentBox: {
          ...currentBox,
          x1: clientX - left,
          y1: clientY - top,
        },
      }))
    }
  }

  _getCurrentBoxArea = () => {
    const { x0, x1, y0, y1 } = this.state.currentBox
    return Math.abs(x0 - x1) * Math.abs(y0 - y1)
  }

  _getTfCoord = () => {
    const { width, height, currentBox } = this.state
    const { x0, x1, y0, y1 } = currentBox
    const left = x1 < x0 ? x1 : x0
    const top = y1 < y0 ? y1 : y0
    const right = x1 > x0 ? x1 : x0
    const bottom = y1 > y0 ? y1 : y0

    const topLeftX = left / width
    const topLeftY = top / height
    const bottomRightX = right / width
    const bottomRightY = bottom / height
    return { topLeftX, topLeftY, bottomRightX, bottomRightY }
  }

  _onPointerUp = () => {
    const { currentBox } = this.state
    if (currentBox.x1 && currentBox.y1 && this._getCurrentBoxArea() > 1000) {
      this.setState(({ customBoxes }) => ({
        customBoxes: [...customBoxes, this._getTfCoord()],
      }))
    }
    this.setState({ mouseDown: false })
  }

  _onPointerLeave = () =>
    this.setState({
      mouseDown: false,
      currentBox: {
        x0: null,
        x1: null,
        y0: null,
        y1: null,
      },
    })

  _removeCustomBox = index => () => {
    this.setState(({ customBoxes }) => ({
      customBoxes: customBoxes.filter((_, i) => i !== index),
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
    const {
      width,
      height,
      customBoxes,
      currentBox,
      mouseDown,
      imgLoaded,
    } = this.state

    return (
      <div
        className={classnames(classes.imgContainer, {
          [classes.editable]: editable,
        })}
        onPointerDown={this._onPointerDown}
        onPointerUp={this._onPointerUp}
        onPointerMove={this._onPointerMove}
        onPointerLeave={this._onPointerLeave}
        style={{ width, height }}
      >
        <img
          className={classes.img}
          draggable={false}
          src={getPictureUrl(id)}
          alt={author}
          onLoad={this._onLoad}
          ref={this.imageRef}
        />
        {imgLoaded &&
          showBoxes &&
          detections
            .filter(({ score }) => score > threshold)
            .map(({ box }, index) => (
              <Box key={index} {...box} width={width} height={height} />
            ))}
        {customBoxes.map((box, index) => (
          <Box
            key={index}
            {...box}
            width={width}
            height={height}
            onRemove={this._removeCustomBox(index)}
          />
        ))}
        {mouseDown &&
          currentBox.x1 &&
          currentBox.y1 && <CustomBox {...currentBox} />}
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
