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
import Picture from 'components/Picture'

const styles = theme => ({
  stepper: {
    marginBottom: 30,
  },
  fakeBtn: {
    width: 90,
  },
  invisible: {
    visibility: 'hidden',
  },
  innerRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  innerLeft: {
    width: '50%',
    paddingLeft: 5,
    paddingRight: 5,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  innerRight: {
    width: '50%',
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: 30,
      minHeight: 300,
    },
  },
})

class Contribute extends React.Component {
  state = {
    outStep: 0,
    inStep: 0,
  }

  handleOutStepBack = () =>
    this.setState(({ outStep }) => ({ outStep: outStep - 1 }))
  handleInStepBack = () =>
    this.setState(({ inStep }) => ({ inStep: inStep - 1 }))
  handleOutStepNext = () =>
    this.setState(({ outStep }) => ({ outStep: outStep + 1 }))
  handleInStepNext = () =>
    this.setState(({ inStep }) => ({ inStep: inStep + 1 }))
  handleOutStepReset = () => this.setState({ outStep: 1, inStep: 0 })

  render() {
    const { classes } = this.props
    const { outStep, inStep } = this.state

    return (
      <Container>
        <MobileStepper
          variant="dots"
          position="static"
          steps={9}
          activeStep={inStep}
          className={classNames(classes.stepper, {
            [classes.invisible]: outStep === 0 || outStep === 2,
          })}
          backButton={
            <Button
              size="small"
              onClick={
                inStep === 0 ? this.handleOutStepBack : this.handleInStepBack
              }
            >
              <Icon>keyboard_arrow_left</Icon>
              Retour
            </Button>
          }
          nextButton={<div className={classes.fakeBtn} />}
        />

        <SwipeableViews
          index={outStep}
          style={{ height: '100%' }}
          containerStyle={{ height: '100%' }}
        >
          <Intro onNext={this.handleOutStepNext} />
          <div className={classes.innerRoot}>
            <Picture className={classes.innerLeft} />
            <div className={classes.innerRight}>
              <SwipeableViews
                index={inStep}
                style={{ height: '100%' }}
                containerStyle={{ height: '100%' }}
              >
                <HowMany onNext={this.handleInStepNext} />
                <WhatColor onNext={this.handleInStepNext} />
                <HasElbowRest onNext={this.handleInStepNext} />
                <HowIsTheBack onNext={this.handleInStepNext} />
                <WhatIsItsShape onNext={this.handleInStepNext} />
                <WhatIsItsCondition onNext={this.handleInStepNext} />
                <IsItCustomized onNext={this.handleInStepNext} />
                <WhereIsIt onNext={this.handleInStepNext} />
                <WhatIsThePosition onNext={this.handleOutStepNext} />
              </SwipeableViews>
            </div>
          </div>
          <Thanks onReset={this.handleOutStepReset} />
        </SwipeableViews>
      </Container>
    )
  }
}

Contribute.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Contribute)
