import React from 'react'
import propTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'
import Layout from './Layout'

class HowMany extends React.Component {
  render() {
    const { onNext } = this.props

    return (
      <Layout
        Title={
          <Typography variant="title" align="center">
            <Highlight>Combien</Highlight> de chaises y&apos;a-t-il sur la photo
            ?
          </Typography>
        }
      >
        <Choices
          onChange={onNext}
          items={[
            { value: 'ONE', label: '1' },
            { value: 'TWO', label: '2' },
            { value: 'THREE', label: '3' },
            { value: 'FOUR', label: '4' },
            { value: 'FIVE_OR_MORE', label: '5 OU PLUS' },
            { value: 'NONE', label: 'AUCUNE' },
          ]}
        />
      </Layout>
    )
  }
}

HowMany.propTypes = {
  onNext: propTypes.func.isRequired,
}

export default HowMany
