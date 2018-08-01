import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import hero from 'images/hero.png'
import DownArrow from './DownArrow'
import { compose } from 'recompose'
import withScrollManager from 'enhancers/withScrollManager'

const styles = theme => ({
  hero: {
    height: '100vh',
    minHeight: 300,
    backgroundImage: `url("${hero}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  heroImg: {
    width: 'auto',
    height: '100%',
  },
  container: {
    marginLeft: '10%',
  },
  txt: {
    textShadow: theme.shadows[24],
    marginBottom: 20,
  },
})

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
        <div className={classes.container}>
          <Typography
            variant="display2"
            color="primary"
            className={classes.txt}
          >
            THE<br />MONOBLOC<br />PROJECT
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            className={classes.txt}
          >
            Apportez votre bloc à l’édifice !
          </Typography>
          <Button variant="contained" color="secondary">
            DÉMARRER
          </Button>
        </div>
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
