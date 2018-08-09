import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Button, Icon, MobileStepper, withStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Container from 'components/Container'
import HowMany from './HowMany'
import WhatColor from './WhatColor'
import HasElbowRest from './HasElbowRest'
import Thanks from './Thanks'
import Intro from './Intro'
import HowIsTheBack from './HowIsTheBack'
import WhatIsItsShape from './WhatIsItsShape'
import WhatIsItsCondition from './WhatIsItsCondition'
import IsItCustomized from './IsItCustomized'
import WhereIsIt from './WhereIsIt'
import WhatIsThePosition from './WhatIsThePosition'

const styles = {
  stepper: {
    marginBottom: 30,
  },
  fakeBtn: {
    width: 90,
  },
  invisible: {
    visibility: 'hidden',
  },
}

class Contribute extends React.Component {
  state = {
    step: 0,
  }

  handleBack = () => this.setState(({ step }) => ({ step: step - 1 }))
  handleNext = () => this.setState(({ step }) => ({ step: step + 1 }))
  handleReset = () => this.setState({ step: 1 })

  render() {
    const { classes } = this.props
    const { step } = this.state

    return (
      <Container>
        <MobileStepper
          variant="dots"
          position="static"
          steps={9}
          activeStep={step - 1}
          className={classNames(classes.stepper, {
            [classes.invisible]: step === 0 || step === 10,
          })}
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={step === 1}
            >
              <Icon>keyboard_arrow_left</Icon>
              Retour
            </Button>
          }
          nextButton={<div className={classes.fakeBtn} />}
        />
        <SwipeableViews index={step}>
          <Intro onNext={this.handleNext} />
          <HowMany onNext={this.handleNext} />
          <WhatColor onNext={this.handleNext} />
          <HasElbowRest onNext={this.handleNext} />
          <HowIsTheBack onNext={this.handleNext} />
          <WhatIsItsShape onNext={this.handleNext} />
          <WhatIsItsCondition onNext={this.handleNext} />
          <IsItCustomized onNext={this.handleNext} />
          <WhereIsIt onNext={this.handleNext} />
          <WhatIsThePosition onNext={this.handleNext} />
          <Thanks onReset={this.handleReset} />
        </SwipeableViews>
      </Container>
    )
  }
}

Contribute.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Contribute)
