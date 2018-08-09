import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatIsItsCondition extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Comment jugez-vous l&apos;état de cette{' '}
            <Highlight>chaise</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
          items={[
            { value: 'NEW', label: 'NEUVE' },
            { value: 'DIRTY', label: 'USÉE OU SALE' },
            { value: 'DAMAGED', label: 'TRÈS ÂBIMÉE' },
            { value: 'PATCHED_UP', label: 'RAFISTOLÉE' },
            { value: 'DONT_KNOW', label: 'JE NE SAIS PAS' },
          ]}
        />
      </Layout>
    )
  }
}

WhatIsItsCondition.propTypes = {
  onNext: propTypes.func.isRequired,
}

export default WhatIsItsCondition
