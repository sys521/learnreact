import React from 'react'
class PlaySong extends React.Component {
  componentWillMount () {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <div>xxx</div>
    )
  }
}
export default PlaySong