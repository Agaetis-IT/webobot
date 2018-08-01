import React from 'react'
import propTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

export const ScrollContext = React.createContext()

class ScrollY extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.y !== this.props.y) {
      window.scrollTo(0, this.props.y)
    }
  }

  render() {
    return null
  }
}

ScrollY.propTypes = {
  y: propTypes.number.isRequired,
}

class ScrollManager extends React.Component {
  scrollTo = to => {
    const from = window.scrollY
    this.setState({ from: 0, to: 0 }, () => {
      this.setState({ from, to })
    })
  }

  state = {
    from: 0,
    to: 0,
    scrollTo: this.scrollTo,
  }

  render() {
    const { children } = this.props
    const { from, to } = this.state
    return (
      <ScrollContext.Provider value={this.state}>
        {(from || to) && (
          <Motion defaultStyle={{ y: from }} style={{ y: spring(to) }}>
            {({ y }) => <ScrollY y={Math.round(y)} />}
          </Motion>
        )}
        {children}
      </ScrollContext.Provider>
    )
  }
}

ScrollManager.propTypes = {
  children: propTypes.node.isRequired,
}

export default ScrollManager
