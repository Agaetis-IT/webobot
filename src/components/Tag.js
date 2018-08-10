import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  tag: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 8,
    paddingRight: 8,
    fontWeight: 700,
    margin: 2,
    display: 'inline-block',
    borderRadius: theme.shape.borderRadius,
  },
})

const Tag = ({ classes, children }) => (
  <Typography className={classes.tag}>{children}</Typography>
)

Tag.propTypes = {
  classes: propTypes.object.isRequired,
  children: propTypes.string.isRequired,
}

export default withStyles(styles)(Tag)
