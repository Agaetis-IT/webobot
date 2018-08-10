import React from 'react'
import propTypes from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import Layout from './Layout'

const styles = {
  actions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
}

class Crop extends React.Component {
  render() {
    const { classes, disabled, onNext } = this.props
    return (
      <Layout>
        <div>
          <Typography variant="title">
            Veuillez encadrer la chaise qui domine sur cette photo.
          </Typography>
          <Typography>
            Placez votre curseur sur l&apos;image, et un cadre apparaitra pour
            vous permettre d&apos;encadrer la chaise qui domine sur cette photo.
          </Typography>
          <div className={classes.actions}>
            <Button
              color="primary"
              variant="contained"
              className={classes.btn}
              disabled={disabled}
              onClick={onNext}
            >
              VALIDER
            </Button>
          </div>
        </div>
      </Layout>
    )
  }
}

Crop.propTypes = {
  classes: propTypes.object.isRequired,
  onNext: propTypes.func.isRequired,
  disabled: propTypes.bool,
}

export default withStyles(styles)(Crop)
