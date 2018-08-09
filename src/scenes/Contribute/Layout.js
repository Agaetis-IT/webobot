import React from 'react'
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import Picture from 'components/Picture'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: 30,
      minHeight: 300,
    },
  },
  picture: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
})

class Layout extends React.Component {
  render() {
    const { classes, Title, children } = this.props

    return (
      <div className={classes.root}>
        <Picture className={classes.picture} />
        <div className={classes.form}>
          {Title}
          {children}
        </div>
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
