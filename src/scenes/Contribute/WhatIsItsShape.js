import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatIsItsShape extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Quelle est sa <Highlight>forme</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
          items={[
            { value: 'ROUND', label: 'ÉPAULES ARRONDIES' },
            { value: 'SQUARE', label: 'ÉPAULES CARRÉES' },
            { value: 'NONE', label: 'NON VISIBLE' },
          ]}
        />
      </Layout>
    )
  }
}

WhatIsItsShape.propTypes = {
  onNext: propTypes.func.isRequired,
}

export default WhatIsItsShape
