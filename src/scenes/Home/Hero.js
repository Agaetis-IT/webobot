import React, { Component } from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import hero from 'images/hero.png'
import DownArrow from './DownArrow'
import { compose } from 'recompose'
import withScrollManager from 'enhancers/withScrollManager'

const styles = {
  hero: {
    height: '100vh',
    minHeight: 300,
    backgroundImage: `url("${hero}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  heroImg: {
    width: 'auto',
    height: '100%',
  },
}

class Hero extends Component {
  constructor(props) {
    super(props)
    this.heroRef = React.createRef()
  }

  onDownArrowClick = () => {
    const { scrollTo } = this.props
    scrollTo(this.heroRef.current.offsetHeight)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.hero} ref={this.heroRef}>
        <DownArrow onClick={this.onDownArrowClick} />
      </div>
    )
  }
}

Hero.propTypes = {
  classes: propTypes.object.isRequired,
  scrollTo: propTypes.func.isRequired,
}

const enhancers = compose(
  withStyles(styles),
  withScrollManager()
)
export default enhancers(Hero)
