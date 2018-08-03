import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Picture from 'components/Picture'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'

const styles = {
  root: {
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },
  picture: {
    width: '50%',
  },
}

class HowMany extends React.Component {
  render() {
    const { classes, onNext } = this.props

    return (
      <div className={classes.root}>
        <Picture className={classes.picture} />
        <div className={classes.form}>
          <Typography variant="title" className={classes.title}>
            De quelle <Highlight>couleur</Highlight> est la chaise ?
          </Typography>
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
        </div>
      </div>
    )
  }
}

HowMany.propTypes = {
  classes: propTypes.object.isRequired,
  onNext: propTypes.func.isRequired,
}

export default withStyles(styles)(HowMany)
