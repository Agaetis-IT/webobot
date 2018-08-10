import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Button, Icon, MobileStepper, withStyles } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Container from 'components/Container'
import HowMany from './questions/HowMany'
import WhatColor from './questions/WhatColor'
import HasElbowRest from './questions/HasElbowRest'
import Thanks from './Thanks'
import Intro from './Intro'
import HowIsTheBack from './questions/HowIsTheBack'
import WhatIsItsShape from './questions/WhatIsItsShape'
import WhatIsItsCondition from './questions/WhatIsItsCondition'
import IsItCustomized from './questions/IsItCustomized'
import WhereIsIt from './questions/WhereIsIt'
import WhatIsThePosition from './questions/WhatIsThePosition'
import Picture from 'components/Picture'
import Tag from 'components/Tag'
import Crop from './questions/Crop'

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
  tags: {
    minHeight: 64,
  },
})

class Contribute extends React.Component {
  state = {
    outStep: 0,
    inStep: 0,
    tags: {},
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
  handleOutStepEnd = () => this.setState({ outStep: 2, inStep: 0 })
  handleSetTag = (key, value) =>
    this.setState(({ tags }) => ({ tags: { ...tags, [key]: value } }))

  render() {
    const { classes } = this.props
    const { outStep, inStep, tags } = this.state

    return (
      <Container>
        <MobileStepper
          variant="dots"
          position="static"
          steps={10}
          activeStep={inStep}
          className={classNames(classes.stepper, {
            [classes.invisible]: outStep === 0 || inStep === 9,
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
          disabled
        >
          <Intro onNext={this.handleOutStepNext} />
          <div className={classes.innerRoot}>
            <div className={classes.innerLeft}>
              <Picture onlyOne />
              <div className={classes.tags}>
                {Object.values(tags)
                  .filter(t => t)
                  .map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
            <div className={classes.innerRight}>
              <SwipeableViews
                index={inStep}
                style={{ height: '100%' }}
                containerStyle={{ height: '100%' }}
                disabled
              >
                <HowMany
                  onNext={this.handleInStepNext}
                  onEndForm={this.handleOutStepEnd}
                  setTag={this.handleSetTag}
                />
                <Crop onNext={this.handleInStepNext} />
                <WhatColor
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <HasElbowRest
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <HowIsTheBack
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <WhatIsItsShape
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <WhatIsItsCondition
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <IsItCustomized
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <WhereIsIt
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />
                <WhatIsThePosition
                  onNext={this.handleInStepNext}
                  setTag={this.handleSetTag}
                />

                <Thanks onReset={this.handleOutStepReset} />
              </SwipeableViews>
            </div>
          </div>
        </SwipeableViews>
      </Container>
    )
  }
}

Contribute.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Contribute)
