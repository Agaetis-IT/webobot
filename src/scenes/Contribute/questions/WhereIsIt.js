import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class WhereIsIt extends React.Component {
  onChange = (value, label) => {
    const { onNext, setTag } = this.props
    if (value !== 'DONT_KNOW' && value !== 'OTHER') {
      setTag('WhereIsIt', label)
    } else {
      setTag('WhereIsIt', null)
    }
    onNext(value)
  }

  render() {
    const { value } = this.props
    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            Dans quel <Highlight>environnement</Highlight> se trouve cette
            chaise ?
          </Typography>
        }
      >
        <Choices
          value={value}
          onChange={this.onChange}
          items={[
            { value: 'GARDEN', label: 'JARDIN' },
            { value: 'TERRACE', label: 'BALCON OU TERRASSE' },
            { value: 'NATURE', label: 'PARC OU NATURE' },
            { value: 'OUTDOOR', label: 'RUE OU EXTÉRIEUR URBAIN' },
            { value: 'INDOOR', label: "INTÉRIEUR D'UN PARTICULIER" },
            { value: 'PUBLIC_INDOOR', label: "INTÉRIEUR D'UN LIEU PUBLIC" },
            { value: 'OTHER', label: 'AUTRE' },
            { value: 'DONT_KNOW', label: 'JE NE SAIS PAS' },
          ]}
        />
      </Layout>
    )
  }
}

WhereIsIt.propTypes = {
  onNext: propTypes.func.isRequired,
  setTag: propTypes.func.isRequired,
  value: propTypes.string,
}

export default WhereIsIt
