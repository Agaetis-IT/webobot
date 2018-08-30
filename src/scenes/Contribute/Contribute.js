import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import {
  Button,
  CircularProgress,
  Icon,
  MobileStepper,
  withStyles,
} from '@material-ui/core'
import { fetchPictures } from 'services/mediobot'
import random from 'lodash/random'
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
  progress: {
    alignSelf: 'center',
  },
})

class Contribute extends React.Component {
  state = {
    pictures: [],
    currentPicture: null,
    fetched: false,
    outStep: 0,
    inStep: 0,
    tags: {},
    boxes: [],
    answers: {},
  }

  async componentDidMount() {
    const { data: pictures, status } = await fetchPictures()
    if (status !== 200) {
      return
    }
    const currentPicture = pictures[random(0, pictures.length - 1)]
    this.setState({ pictures, currentPicture, fetched: true })
  }

  handlePictureChange = boxes => this.setState({ boxes })
  handleOutStepBack = () =>
    this.setState(({ outStep }) => ({ outStep: outStep - 1 }))
  handleInStepBack = () =>
    this.setState(({ inStep }) => ({ inStep: inStep - 1 }))
  handleOutStepNext = () =>
    this.setState(({ outStep }) => ({ outStep: outStep + 1 }))

  handleReset = () => {
    const { pictures } = this.state
    const currentPicture = pictures[random(0, pictures.length - 1)]

    this.setState({
      outStep: 1,
      inStep: 0,
      answers: [],
      tags: {},
      boxes: [],
      currentPicture,
    })
  }

  handleGoEnd = question => value =>
    this.setState(({ answers }) => ({
      outStep: 1,
      inStep: 10,
      answers: { ...answers, [question]: value },
    }))

  handleInStepNext = question => value =>
    question
      ? this.setState(({ inStep, answers }) => ({
          inStep: inStep + 1,
          answers: { ...answers, [question]: value },
        }))
      : this.setState(({ inStep }) => ({
          inStep: inStep + 1,
        }))

  handleSetTag = (key, value) =>
    this.setState(({ tags }) => ({ tags: { ...tags, [key]: value } }))

  render() {
    const { classes } = this.props
    const {
      fetched,
      currentPicture,
      outStep,
      inStep,
      answers,
      tags,
      boxes,
    } = this.state

    if (!fetched) {
      return (
        <Container>
          <CircularProgress className={classes.progress} size={64} />
        </Container>
      )
    }

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
              <Picture
                onlyOne
                id={currentPicture.id}
                author={currentPicture.author}
                detections={currentPicture.detections}
                value={boxes}
                onChange={this.handlePictureChange}
                disabled={inStep !== 1}
              />
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
                  onNext={this.handleInStepNext('HowMany')}
                  onEndForm={this.handleGoEnd('HowMany')}
                  setTag={this.handleSetTag}
                  value={answers['HowMany']}
                />
                <Crop
                  onNext={this.handleInStepNext()}
                  disabled={boxes.length === 0}
                />
                <WhatColor
                  onNext={this.handleInStepNext('WhatColor')}
                  setTag={this.handleSetTag}
                  value={answers['WhatColor']}
                />
                <HasElbowRest
                  onNext={this.handleInStepNext('HasElbowRest')}
                  setTag={this.handleSetTag}
                  value={answers['HasElbowRest']}
                />
                <HowIsTheBack
                  onNext={this.handleInStepNext('HowIsTheBack')}
                  setTag={this.handleSetTag}
                  value={answers['HowIsTheBack']}
                />
                <WhatIsItsShape
                  onNext={this.handleInStepNext('WhatIsItsShape')}
                  setTag={this.handleSetTag}
                  value={answers['WhatIsItsShape']}
                />
                <WhatIsItsCondition
                  onNext={this.handleInStepNext('WhatIsItsCondition')}
                  setTag={this.handleSetTag}
                  value={answers['WhatIsItsCondition']}
                />
                <IsItCustomized
                  onNext={this.handleInStepNext('IsItCustomized')}
                  setTag={this.handleSetTag}
                  value={answers['IsItCustomized']}
                />
                <WhereIsIt
                  onNext={this.handleInStepNext('WhereIsIt')}
                  setTag={this.handleSetTag}
                  value={answers['WhereIsIt']}
                />
                <WhatIsThePosition
                  onNext={this.handleInStepNext('WhatIsThePosition')}
                  setTag={this.handleSetTag}
                  value={answers['WhatIsThePosition']}
                />

                <Thanks onReset={this.handleReset} />
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
