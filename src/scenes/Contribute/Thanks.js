import React from 'react'
import propTypes from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import Title from '../Home/Title'
import { Link } from 'react-router-dom'

const styles = {}

class Thanks extends React.Component {
  render() {
    const { classes, onReset } = this.props

    return (
      <div className={classes.root}>
        <Title>Merci</Title>
        <Button onClick={onReset}>ANALYSER UNE AUTRE PHOTO</Button>
        <Link to="/">
          <Button>ÇA SUFFIT POUR AUJOURD&apos;HUI</Button>
        </Link>
      </div>
    )
  }
}

Thanks.propTypes = {
  classes: propTypes.object.isRequired,
  onReset: propTypes.func.isRequired,
}

export default withStyles(styles)(Thanks)
