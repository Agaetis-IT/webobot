import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class HowIsTheBack extends React.Component {
  onChange = (value, label) => {
    const { onNext, setTag } = this.props
    if (value !== 'NONE') {
      setTag('HowIsTheBack', `DOSSIER ${label}`)
    } else {
      setTag('HowIsTheBack', null)
    }
    onNext(value)
  }

  render() {
    const { value } = this.props
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Comment est constitué son <Highlight>dossier</Highlight> ?
          </Typography>
        }
      >
        <Choices
          value={value}
          onChange={this.onChange}
          items={[
            { value: 'FULL', label: 'PLEIN' },
            { value: 'GROOVES', label: 'À RAINURES' },
            { value: 'PATTERN', label: 'À MOTIFS' },
            { value: 'MESSAGES', label: 'À MESSAGES' },
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
  setTag: propTypes.func.isRequired,
  value: propTypes.string,
}

export default HowIsTheBack
