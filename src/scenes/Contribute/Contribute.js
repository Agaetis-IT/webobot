import React from 'react'
import propTypes from 'prop-types'
import { Button, Icon, MobileStepper, withStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Container from 'components/Container'
import HowMany from './HowMany'
import WhatColor from './WhatColor'
import HasElbowRest from './HasElbowRest'

const styles = {
  stepper: {
    marginBottom: 30,
  },
  fakeBtn: {
    width: 90,
  },
}

const steps = [{}, {}, {}]

class Contribute extends React.Component {
  state = {
    step: 0,
  }

  handleBack = () => this.setState(({ step }) => ({ step: step - 1 }))
  handleNext = () => this.setState(({ step }) => ({ step: step + 1 }))

  render() {
    const { classes } = this.props
    const { step } = this.state

    return (
      <Container>
        <MobileStepper
          variant="dots"
          position="static"
          steps={steps.length}
          activeStep={step}
          className={classes.stepper}
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={step === 0}
            >
              <Icon>keyboard_arrow_left</Icon>
              Retour
            </Button>
          }
          nextButton={<div className={classes.fakeBtn} />}
        />
        <SwipeableViews index={step}>
          <HowMany onNext={this.handleNext} />
          <WhatColor onNext={this.handleNext} />
          <HasElbowRest onNext={this.handleNext} />
        </SwipeableViews>
      </Container>
    )
  }
}

Contribute.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Contribute)
