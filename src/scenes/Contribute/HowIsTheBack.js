import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class HowIsTheBack extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Comment est constitué son <Highlight>dossier</Highlight> ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
          items={[
            { value: 'FULL', label: 'PLEIN' },
            { value: 'GROOVES', label: 'A RAINURES' },
            { value: 'PATTERN', label: 'A MOTIFS' },
            { value: 'MESSAGES', label: 'A MESSAGES' },
            { value: 'CANE', label: 'CANNÉS' },
            { value: 'NONE', label: 'NON VISIBLE' },
          ]}
        />
      </Layout>
    )
  }
}

HowIsTheBack.propTypes = {
  onNext: propTypes.func.isRequired,
}

export default HowIsTheBack
