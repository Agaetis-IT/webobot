import React from 'react'
import propTypes from 'prop-types'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'
import Highlight from 'components/Highlight'
import { Twemoji } from 'react-emoji-render'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
  headline: {
    height: '3em',
  },
}

class Intro extends React.Component {
  render() {
    const { classes, onNext } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="title">
          Apportez votre <Highlight>bloc</Highlight> à l’édifice !
        </Typography>

        <Grid container spacing={8}>
          <Grid item md={4} xs={12}>
            <Typography className={classes.headline} variant="headline">
              <Highlight>Analysez</Highlight> l’image qui vous sera proposée.
            </Typography>
            <Typography paragraph>
              Toutes les chaises monoblocs sont différentes. Chacune a sa propre
              histoire, son propre vécu.
            </Typography>
            <Typography paragraph>
              Et vous, n’avez-vous jamais eu d’histoire avec une monobloc ?{' '}
              <Twemoji text=":smirk:" />
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography className={classes.headline} variant="headline">
              <Highlight>Répondez</Highlight> à quelques questions.
            </Typography>
            <Typography paragraph>
              Pas de panique, ce sont des questions assez simples. Mais plus
              vos réponses seront justes plus notre robot sera en mesure de
              faire son job.
            </Typography>
            <Typography paragraph>
              On compte vraiment sur vous ! <Twemoji text=":wink:" />
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography className={classes.headline} variant="headline">
              Faites le <Highlight>autant de fois</Highlight> que vous le
              souhaitez !
            </Typography>
            <Typography paragraph>
              Si cela vous amuse, vous interesse ou vous motive, n’hésitez pas à
              en faire autant que vous le souhaitez.
            </Typography>
            <Typography paragraph>
              En plus, y’a des cadeaux à gagner !{' '}
              <Twemoji text=":stuck_out_tongue:" />
            </Typography>
          </Grid>
        </Grid>

        <Button
          onClick={onNext}
          color="primary"
          size="large"
          variant="contained"
        >
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
