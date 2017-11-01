import React from 'react'
import PsHeader from './playsong/PsHeader.js'
import axios from 'axios'
import Play from './playsong/Play.js'
import '../css/playsong.css'
class PlaySong extends React.Component {
  constructor () {
    super ()
    this.state = {
      currentMusic: []
    }
  }
  componentWillMount () {
    let query = this.props.match.params
    axios.get('../song.json').then(res => { // 这个固态的请求路径根据当前目录变化。
      let data = res.data 
      let currentMusic = data.filter((e,i) => {
        if (e.id === query.id) {
          return e
        }
      })
      this.setState({currentMusic})
      console.log(this.state.currentMusic)
    })
  }
  render() {
    return (
      <div id='playsong'>
        <div className="ps-layout" 
        style={{backgroundImage:'url('+(this.state.currentMusic.length? this.state.currentMusic[0].filter:null) + ')'}}>
          <PsHeader cover = {this.state.currentMusic.length? this.state.currentMusic[0].cover:'undefined'}></PsHeader>
          <Play music={this.state.currentMusic}></Play>
        </div>
      </div>
    )
  }
}
export default PlaySong