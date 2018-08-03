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
          <Typography variant="title">
            <Highlight>Combien</Highlight> de chaises y&apos;a-t-il sur la photo
            ?
          </Typography>
          <Choices
            onChange={onNext}
            items={[
              { value: 'ONE', label: '1' },
              { value: 'TWO', label: '2' },
              { value: 'THREE', label: '3' },
              { value: 'FOUR', label: '4' },
              { value: 'FIVE_OR_MORE', label: '5 OU PLUS' },
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
