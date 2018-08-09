import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class IsItCustomized extends React.Component {
  onChange = value => {
    const { onNext, setTag } = this.props
    if (value === 'YES') {
      setTag('IsItCustomized', 'CUSTOMISÉE')
    } else {
      setTag('IsItCustomized', null)
    }
    onNext(value)
  }

  render() {
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Cette chaise est-elle <Highlight>customisée</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={this.onChange}
          items={[
            { value: 'YES', label: 'OUI' },
            { value: 'NO', label: 'NON' },
            { value: 'DONT_KNOW', label: 'JE NE SAIS PAS' },
          ]}
        />
      </Layout>
    )
  }
}

IsItCustomized.propTypes = {
  onNext: propTypes.func.isRequired,
  setTag: propTypes.func.isRequired,
}

export default IsItCustomized
