import React from 'react'
import { ScrollContext } from 'components/ScrollManager'

//eslint-disable-next-line react/display-name
const withScrollManager = () => Component => props => (
  <ScrollContext.Consumer>
    {({ scrollTo }) => <Component scrollTo={scrollTo} {...props} />}
  </ScrollContext.Consumer>
)

export default withScrollManager
