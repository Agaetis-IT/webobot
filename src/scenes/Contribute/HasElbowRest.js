import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class HasElbowRest extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title">
            Cette chaise possède-t-elle des <Highlight>accoudoirs</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
          items={[
            { value: 'YES', label: 'OUI' },
            { value: 'NO', label: 'NON' },
          ]}
        />
      </Layout>
    )
  }
}

HasElbowRest.propTypes = {
  onNext: propTypes.func.isRequired,
}

export default HasElbowRest
