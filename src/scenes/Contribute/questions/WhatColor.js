import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatColor extends React.Component {
  onChange = (value, label) => {
    const { onNext, setTag } = this.props
    if (value !== 'OTHER') {
      setTag('WhatColor', label)
    } else {
      setTag('WhatColor', null)
    }
    onNext(value)
  }

  render() {
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            De quelle <Highlight>couleur</Highlight> est la chaise ?
          </Typography>
        }
      >
        <Choices
          onChange={this.onChange}
          items={[
            { value: 'BLUE', label: 'BLEU' },
            { value: 'WHITE', label: 'BLANC' },
            { value: 'RED', label: 'ROUGE' },
            { value: 'YELLOW', label: 'JAUNE' },
            { value: 'GREEN', label: 'VERT' },
            { value: 'OTHER', label: 'AUTRE' },
          ]}
        />
      </Layout>
    )
  }
}

WhatColor.propTypes = {
  onNext: propTypes.func.isRequired,
  setTag: propTypes.func.isRequired,
}

export default WhatColor
