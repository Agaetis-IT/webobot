import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  container: {
    width: '90%',
    maxWidth: 1280,
    margin: 'auto',
    paddingTop: 90,
    paddingBottom: 150,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
  },
}

const Container = ({ children, classes }) => (
  <div className={classes.container}>{children}</div>
)

Container.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
}

export default withStyles(styles)(Container)
