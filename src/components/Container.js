import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  container: {
    width: '90%',
    margin: '80px auto',
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
