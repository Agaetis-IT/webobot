import React from 'react'
import propTypes from 'prop-types'
import { getPictureUrl } from 'services/mediobot'
import { withStyles } from '@material-ui/core'
import Box from './Box'

const styles = {
  root: {},
  imgContainer: {
    position: 'relative',
  },
  img: {},
}

class Picture extends React.Component {
  state = {
    width: 0,
    height: 0,
  }

  _onLoad = ({ target: img }) =>
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth,
    })

  render() {
    const { classes, id, author, detections, showBoxes, threshold } = this.props
    const { width, height } = this.state

    return (
      <div className={classes.root}>
        <div className={classes.imgContainer} style={{ width, height }}>
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
