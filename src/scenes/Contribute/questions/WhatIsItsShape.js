import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatIsItsShape extends React.Component {
  onChange = (value, label) => {
    const { onNext, setTag } = this.props
    if (value !== 'NONE') {
      setTag('WhatIsItsShape', label)
    } else {
      setTag('WhatIsItsShape', null)
    }
    onNext(value)
  }

  render() {
    const { value } = this.props
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Quelle est sa <Highlight>forme</Highlight> ?
          </Typography>
        }
      >
        <Choices
          value={value}
          onChange={this.onChange}
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
  setTag: propTypes.func.isRequired,
  value: propTypes.string,
}

export default WhatIsItsShape
