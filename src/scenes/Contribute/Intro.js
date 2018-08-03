import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Highlight from 'components/Highlight'

const styles = {}

class Intro extends React.Component {
  render() {
    const { classes, onNext } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="title">
          Apportez votre <Highlight>bloc</Highlight> à l’édifice !
        </Typography>
        <Button onClick={onNext} color="secondary" variant="contained">
          C&apos;EST PARTI !
        </Button>
      </div>
    )
  }
}

Intro.propTypes = {
  classes: propTypes.object.isRequired,
  onNext: propTypes.func.isRequired,
}

export default withStyles(styles)(Intro)
