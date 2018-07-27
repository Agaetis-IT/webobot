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
    imgLoaded: false,
    width: 0,
    height: 0,
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
    this.containerRef = React.createRef()
  }

  _onLoad = ({ target: img }) =>
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth,
      imgLoaded: true,
    })

  _onPointerDown = ({ clientX, clientY }) => {
    const { offsetLeft, offsetTop } = this.containerRef.current
    this.setState({
      mouseDown: true,
      currentBox: {
        x0: clientX - offsetLeft,
        y0: clientY - offsetTop,
        x1: null,
        y1: null,
      },
    })
  }

  _onPointerMove = ({ clientX, clientY }) => {
    if (this.state.mouseDown) {
      const { offsetLeft, offsetTop } = this.containerRef.current
      this.setState(({ currentBox }) => ({
        currentBox: {
          ...currentBox,
          x1: clientX - offsetLeft,
          y1: clientY - offsetTop,
        },
      }))
    }
  }

  _onPointerUp = () => {
    const { currentBox } = this.state
    if (currentBox.x1 && currentBox.y1) {
      this.setState(({ customBoxes, currentBox }) => ({
        customBoxes: [...customBoxes, currentBox],
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
      <div className={classes.root}>
        <div
          className={classnames(classes.imgContainer, {
            [classes.editable]: editable,
          })}
          onPointerDown={this._onPointerDown}
          onPointerUp={this._onPointerUp}
          onPointerMove={this._onPointerMove}
          onPointerLeave={this._onPointerLeave}
          ref={this.containerRef}
          style={{ width, height }}
        >
          <img
            className={classes.img}
            src={getPictureUrl(id)}
            alt={author}
            onLoad={this._onLoad}
          />
          {imgLoaded &&
            showBoxes &&
            detections
              .filter(({ score }) => score > threshold)
              .map(({ box }, index) => (
                <Box key={index} {...box} width={width} height={height} />
              ))}
          {customBoxes.map((box, index) => (
            <CustomBox
              key={index}
              {...box}
              onRemove={this._removeCustomBox(index)}
            />
          ))}
          {mouseDown &&
            currentBox.x1 &&
            currentBox.y1 && <CustomBox {...currentBox} current />}
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
