import React from 'react'
import '../../css/play.css'
class Play extends React.Component {
  constructor () {
    super()
    this.state = {
      play: true,
      top:"-0px",
      currentLine:0,
      lineHeight:30
    }
  }
  getMusicList () {
    let newarr = []
    if (this.props.music.length) {
      let lrc = this.props.music[0].lyric
      let arr = lrc.split('\n')
      let regex = /^\[(.+)\](.*)/
      for(let i=0;i<arr.length;i++){
        if(arr[i]){
          let newobj={}
          let time=arr[i].match(regex)[1]
          let words=arr[i].match(regex)[2]
          if(words){
            newobj[time]=words
            newarr.push(newobj)
          }
        }
      }
    }
    return newarr
  }
  componentWillReceiveProps() {
    console.log(this.props)
  }
  componentDidMount () {
    console.log(this.refs.myaudio)
  }
  addPad (time) {
    if(time<10){
      return time ='0'+time
    }else {
      return time
    }
  }
  play () {
    let audio = this.refs.myaudio
    this.setState({play:true})
    audio.play()
    let list = this.getMusicList()
    setInterval(() => {
      let time = (audio.currentTime ?audio.currentTime : 0)
      let minute = parseInt(time/60)
      let second = time-60*minute
      let mt = this.addPad(minute)
      let sd = this.addPad(second)
      let newTime = mt+":"+sd
      let line
      for(let i=0;i<list.length-1;i++){
        let startTime = Object.keys(list[i])[0]
        let lastTime = Object.keys(list[i+1])[0]
        if(startTime < newTime && newTime<lastTime){
          line = i
        }
      }
      let top = -line* this.state.lineHeight+this.state.lineHeight+'px'
      this.setState({currentLine:line})
      this.setState({top:top}) 
    },500)
  }
  render () {
    let list = this.getMusicList().map((e,i) => {
      let item
      let color
      for(let index in e) {
        item = e[index]
        console.log(this.state.currentLine)
        if(i === this.state.currentLine){
          color = 'white'
        }else {
          color = "#ccc"
        }
      }
      return (
        <li style={{lineHeight:'30px',textAlign:'center',color:color}} 
        key={i}>{item}</li>
      )
    })
    return (
      <div className="play">
        <audio src={this.props.music.length? this.props.music[0].url:null} ref="myaudio" onCanPlay={this.play.bind(this)}></audio>
        <p className="title">{this.props.music.length? this.props.music[0].name:null}</p>
        <div className="list-layout">
          <ul className="list" style={{top:this.state.top}}>
            {list}
          </ul>
        </div>
      </div>
    )
  }
}
export default Play