import React from 'react'
import propTypes from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {
    margin: 10,
  },
}

class Choices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: props.defaultValue || null,
    }
  }

  onClick = (value, label) => () => {
    const { onChange } = this.props
    this.setState({ selectedValue: value })
    onChange && onChange(value, label)
  }

  render() {
    const { classes, items } = this.props
    const { selectedValue } = this.state

    return (
      <div className={classes.root}>
        {items.map(({ value, label }) => (
          <Button
            key={value}
            color={value === selectedValue ? 'secondary' : 'primary'}
            variant="contained"
            size="large"
            className={classes.btn}
            onClick={this.onClick(value, label)}
          >
            {label}
          </Button>
        ))}
      </div>
    )
  }
}

Choices.propTypes = {
  classes: propTypes.object.isRequired,
  defaultValue: propTypes.string,
  onChange: propTypes.func,
  items: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
    })
  ).isRequired,
}

export default withStyles(styles)(Choices)
