import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatIsThePosition extends React.Component {
  onChange = (value, label) => {
    const { onNext, setTag } = this.props
    if (value !== 'DONT_KNOW' && value !== 'OTHER') {
      setTag('WhatIsThePosition', label)
    } else {
      setTag('WhatIsThePosition', null)
    }
    onNext(value)
  }

  render() {
    const { value } = this.props
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Pouvez-vous nous décrire dans quelle{' '}
            <Highlight>situation</Highlight> se trouve cette chaise ?
          </Typography>
        }
      >
        <Choices
          value={value}
          onChange={this.onChange}
          items={[
            { value: 'ALONE', label: 'CHAISE SEULE' },
            { value: 'DINNER', label: 'À TABLE' },
            { value: 'STACKED', label: 'EMPILÉES' },
            {
              value: 'BLANKET',
              label: "AGRÉMENTÉE D'UN COUSSIN OU D'UNE COUVERTURE",
            },
            { value: 'OTHER', label: 'AUTRE' },
            { value: 'DONT_KNOW', label: 'JE NE SAIS PAS' },
          ]}
        />
      </Layout>
    )
  }
}

WhatIsThePosition.propTypes = {
  onNext: propTypes.func.isRequired,
  setTag: propTypes.func.isRequired,
  value: propTypes.string,
}

export default WhatIsThePosition
