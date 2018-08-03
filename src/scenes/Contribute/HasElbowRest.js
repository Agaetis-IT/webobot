import React from 'react'
import propTypes from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Picture from 'components/Picture'
import Highlight from 'components/Highlight'
import Choices from 'components/Choices'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '45%',
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
            Cette chaise possède-t-elle des <Highlight>accoudoirs</Highlight> ?
          </Typography>
          <Choices
            onChange={onNext}
            items={[
              { value: 'YES', label: 'OUI' },
              { value: 'NO', label: 'NON' },
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
