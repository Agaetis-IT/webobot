import React, { Component, Fragment } from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Hero from './Hero'
import Title from './Title'
import Text from './Text'

const styles = {
  container: {
    width: '90%',
    margin: '80px auto',
  },
}

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Hero />
        <div className={classes.container}>
          <Title>Le projet</Title>
          <Text>
            Fugiat reprehenderit irure excepteur mollit incididunt proident anim
            incididunt officia laboris esse reprehenderit adipisicing. Labore
            aliquip nulla aute ea amet incididunt. Ut pariatur voluptate esse
            dolor irure eiusmod nostrud nulla nostrud enim. Sunt enim incididunt
            consequat elit irure consequat Lorem adipisicing ex minim esse ea.
            Sit non laboris do ad excepteur in. Exercitation eu occaecat laborum
            commodo reprehenderit id pariatur do tempor. Dolore voluptate velit
            eiusmod aliqua laborum fugiat velit nostrud dolore occaecat ad
            officia ex laborum. Commodo mollit ullamco nisi non. Exercitation
            ipsum minim do eiusmod et ullamco Lorem. Esse cillum cupidatat
            pariatur cillum ipsum mollit officia. Tempor exercitation est cillum
            aute fugiat cupidatat ipsum id in deserunt culpa duis. Sint duis
            esse cupidatat culpa officia et cupidatat. Ad laborum aute mollit
            consectetur enim cillum qui nulla.
          </Text>
          <Title>Comment ça marche ?</Title>
          <Text>
            Fugiat reprehenderit irure excepteur mollit incididunt proident anim
            incididunt officia laboris esse reprehenderit adipisicing. Labore
            aliquip nulla aute ea amet incididunt. Ut pariatur voluptate esse
            dolor irure eiusmod nostrud nulla nostrud enim. Sunt enim incididunt
            consequat elit irure consequat Lorem adipisicing ex minim esse ea.
            Sit non laboris do ad excepteur in. Exercitation eu occaecat laborum
            commodo reprehenderit id pariatur do tempor. Dolore voluptate velit
            eiusmod aliqua laborum fugiat velit nostrud dolore occaecat ad
            officia ex laborum. Commodo mollit ullamco nisi non. Exercitation
            ipsum minim do eiusmod et ullamco Lorem. Esse cillum cupidatat
            pariatur cillum ipsum mollit officia. Tempor exercitation est cillum
            aute fugiat cupidatat ipsum id in deserunt culpa duis. Sint duis
            esse cupidatat culpa officia et cupidatat. Ad laborum aute mollit
            consectetur enim cillum qui nulla.
          </Text>
          <Title>Apportez votre bloc à l&apos;édifice !</Title>
          <Text>
            Fugiat reprehenderit irure excepteur mollit incididunt proident anim
            incididunt officia laboris esse reprehenderit adipisicing. Labore
            aliquip nulla aute ea amet incididunt. Ut pariatur voluptate esse
            dolor irure eiusmod nostrud nulla nostrud enim. Sunt enim incididunt
            consequat elit irure consequat Lorem adipisicing ex minim esse ea.
            Sit non laboris do ad excepteur in. Exercitation eu occaecat laborum
            commodo reprehenderit id pariatur do tempor. Dolore voluptate velit
            eiusmod aliqua laborum fugiat velit nostrud dolore occaecat ad
            officia ex laborum. Commodo mollit ullamco nisi non. Exercitation
            ipsum minim do eiusmod et ullamco Lorem. Esse cillum cupidatat
            pariatur cillum ipsum mollit officia. Tempor exercitation est cillum
            aute fugiat cupidatat ipsum id in deserunt culpa duis. Sint duis
            esse cupidatat culpa officia et cupidatat. Ad laborum aute mollit
            consectetur enim cillum qui nulla.
          </Text>
        </div>
      </Fragment>
    )
  }
}

Home.propTypes = {
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(Home)
