import React from 'react'
class PlaySong extends React.Component {
  componentWillMount () {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <div>playsong</div>
    )
  }
}
export default PlaySong