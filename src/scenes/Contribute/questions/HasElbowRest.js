import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class HasElbowRest extends React.Component {
  onChange = value => {
    const { onNext, setTag } = this.props
    if (value === 'YES') {
      setTag('HasElbowRest', 'ACCOUDOIRS')
    } else {
      setTag('HasElbowRest', null)
    }
    onNext(value)
  }

  render() {
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Cette chaise possède-t-elle des <Highlight>accoudoirs</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={this.onChange}
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
  setTag: propTypes.func.isRequired,
}

export default HasElbowRest
