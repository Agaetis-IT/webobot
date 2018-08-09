import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhatColor extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title">
            De quelle <Highlight>couleur</Highlight> est la chaise ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
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
}

export default WhatColor
