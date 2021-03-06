import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Title from 'components/Title'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: 64,
    fontWeight: 700,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    '& > *': {
      margin: 5,
    },
  },
}

class Thanks extends React.Component {
  render() {
    const { classes, onReset } = this.props

    return (
      <div className={classes.root}>
        <Title className={classes.title}>Merci</Title>

        <Typography>
          Grâce à vous, notre intelligence artificielle s’améliore !
        </Typography>
        <div className={classes.actions}>
          <Button color="primary" variant="contained" onClick={onReset}>
            ANALYSER UNE AUTRE PHOTO
          </Button>
          <Link to="/">
            <Button variant="contained">ÇA SUFFIT POUR AUJOURD&apos;HUI</Button>
          </Link>
        </div>
      </div>
    )
  }
}

Thanks.propTypes = {
  classes: propTypes.object.isRequired,
  onReset: propTypes.func.isRequired,
}

export default withStyles(styles)(Thanks)
