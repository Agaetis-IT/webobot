import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { getPictureUrl } from 'services/mediobot'
import { withStyles } from '@material-ui/core'
import Box from './Box'
import CustomBox from './CustomBox'

const styles = theme => ({
  root: {
    position: 'relative',
  },
  glassPanel: {
    position: 'absolute',
    top: 0,
    left: 0,
    userSelect: 'none',
  },
  img: {
    maxWidth: '100%',
  },
  editable: {
    cursor: 'crosshair',
  },
  placeholder: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    animation: 'placeholder-animation 1s linear 0s infinite alternate',
  },
  '@keyframes placeholder-animation': {
    from: {
      backgroundColor: theme.palette.grey[500],
    },
    to: {
      backgroundColor: theme.palette.grey[300],
    },
  },
})

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

  static getDerivedStateFromProps({ value }, { customBoxes }) {
    if (value !== customBoxes) {
      return {
        customBoxes: value,
      }
    }
    return null
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
    const { disabled } = this.props
    if (disabled) {
      return
    }

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
    const { disabled } = this.props
    if (disabled) {
      return
    }

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
    const { disabled, onlyOne, onChange } = this.props
    if (disabled) {
      return
    }

    if (currentBox.x1 && currentBox.y1) {
      if (onlyOne) {
        this.setState(() => {
          const nextCustomBoxes = [this._getTfCoord()]
          onChange(nextCustomBoxes)
          return { customBoxes: nextCustomBoxes }
        })
      } else {
        this.setState(({ customBoxes }) => {
          const nextCustomBoxes = [...customBoxes, this._getTfCoord()]
          onChange(nextCustomBoxes)
          return {
            customBoxes: nextCustomBoxes,
          }
        })
      }
    }
    this.setState({ mouseDown: false })
  }

  _removeCustomBox = index => () => {
    const { onChange } = this.props
    this.setState(({ customBoxes }) => {
      const nextCustomBoxes = customBoxes.filter((_, i) => i !== index)
      onChange(nextCustomBoxes)
      return {
        customBoxes: nextCustomBoxes,
      }
    })
  }

  componentDidUpdate(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({ imgLoaded: false })
    }
  }

  render() {
    const {
      classes,
      className,
      id,
      author,
      detections,
      showBoxes,
      threshold,
      disabled,
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
      <div className={classnames(classes.root, className)}>
        <img
          className={classes.img}
          draggable={false}
          src={getPictureUrl(id)}
          alt={author}
          onLoad={this._onLoad}
          ref={this.imageRef}
        />
        {!imgLoaded && <div className={classes.placeholder} />}
        <div
          className={classnames(classes.glassPanel, {
            [classes.editable]: !disabled,
          })}
          onPointerDown={this._onPointerDown}
          onPointerUp={this._onPointerUp}
          onPointerMove={this._onPointerMove}
          style={{ width, height }}
        >
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
              disabled={disabled}
            />
          ))}
          {mouseDown &&
            currentBox.x1 &&
            currentBox.y1 && <CustomBox {...currentBox} />}
        </div>
      </div>
    )
  }
}

Picture.propTypes = {
  classes: propTypes.object.isRequired,
  className: propTypes.string,
  id: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  threshold: propTypes.number,
  showBoxes: propTypes.bool,
  onlyOne: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func,
  value: propTypes.array,
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
  onChange: () => null,
  value: [],
}

export default withStyles(styles)(Picture)
