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

  static getDerivedStateFromProps({ value }, { selectedValue }) {
    if (value !== selectedValue) {
      return {
        selectedValue: value,
      }
    }
    return null
  }

  onClick = (value, label) => () => {
    const { onChange } = this.props
    this.setState({ selectedValue: value })
    onChange(value, label)
  }

  render() {
    const { classes, items } = this.props
    const { selectedValue } = this.state

    return (
      <div className={classes.root}>
        {items.map(({ value, label }) => (
          <Button
            key={value}
            color={value === selectedValue ? 'secondary' : 'default'}
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

Choices.defaultProps = {
  onChange: () => null,
}

export default withStyles(styles)(Choices)
