import React, { Component, Fragment } from 'react'
import { fetchPictures } from 'services/mediobot'
import Picture from 'components/Picture'

class Home extends Component {
  state = {
    pictures: [],
  }

  async componentDidMount() {
    const { data: pictures } = await fetchPictures()
    this.setState({ pictures })
  }

  render() {
    const { pictures } = this.state
    return (
      <Fragment>
        {pictures.map(picture => (
          <Picture
            key={picture.id}
            {...picture}
            showBoxes
            threshold={Number(process.env.REACT_APP_THRESHOLD)}
            editable
          />
        ))}
      </Fragment>
    )
  }
}
export default Home
