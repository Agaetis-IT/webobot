import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Picture from 'components/Picture'
import Highlight from 'components/Highlight'

const styles = {
  root: {
    display: 'flex',
  },
  title: {
    width: '100%',
    textAlign: 'center',
  },
  form: {
    width: '50%',
  },
  picture: {
    width: '50%',
  },
}

class HowMany extends React.Component {
  render() {
    const { classes, onNext } = this.props

    return (
      <div className={classes.root}>
        <Picture className={classes.picture} />
        <div className={classes.form}>
          <Typography variant="title" className={classes.title}>
            <Highlight>Combien</Highlight> de chaises y&apos;a-t-il sur la photo
            ?
          </Typography>
          <Button onClick={onNext}>Suivant</Button>
        </div>
      </div>
    )
  }
}

HowMany.propTypes = {
  classes: propTypes.object.isRequired,
  onNext: propTypes.func.isRequired,
}

export default withStyles(styles)(HowMany)
