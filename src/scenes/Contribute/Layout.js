import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: '100%',
  },
}

class Layout extends React.Component {
  render() {
    const { classes, Title, children } = this.props

    return (
      <div className={classes.form}>
        {Title}
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  classes: propTypes.object.isRequired,
  Title: propTypes.node.isRequired,
  children: propTypes.node.isRequired,
}

export default withStyles(styles)(Layout)
