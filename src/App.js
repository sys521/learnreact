import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Hot from './components/Hot.js'
import Recomend from './components/Recomend'
const Find = () =>{
  return <div>Find</div>
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu:[
        {title:'推荐音乐', border: true, url: ''},
        {title:'热歌榜', border:false, url: 'hot'},
        {title:'搜索',border:false, url: 'find'}
      ]
    }
  }
  tabRouter(e,i) {
    this.state.menu.map((element,index,arr) => {
      if(index === i) {
        element.border = true
      } else {
        element.border = false
      }
      return arr
    })
    this.setState(this.state.menu)
  }
  render() {
    return (
      <div>
        <Topbar menu={this.state.menu} onTab={this.tabRouter.bind(this)}></Topbar>
        <Route exact path="/" component={Recomend}/>
        <Route path="/hot" component={Hot}/>
        <Route path="/find" component={Find}/>
      </div>
    )
  }
}

export default App;
