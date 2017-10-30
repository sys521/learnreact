import React, { Component } from 'react';
import './App.css';
import Topbar from './components/Topbar.js'
import {
  Route
} from 'react-router-dom'
import Hot from './components/Hot.js'
import Recomend from './components/Recomend.js'
import Find from './components/Find.js'
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menu:[
        {title:'推荐音乐', border: true, url: 'home'},
        {title:'热歌榜', border:false, url: 'home/hot'},
        {title:'搜索',border:false, url: 'home/find'}
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
        <Route  exact path="/home" component={Recomend}/>
        <Route  exact path="/home/hot" component={Hot}/> 
        {/* 只有匹配到home才会匹配到HOME模板，如果没有HOME模板，HOT模板是不能渲染的。所以，必须也要HOME。并且，父元素的/home 不能是精确匹配，如果是精确匹配，又不能匹配到/home/hot。真是蠢 */}
        <Route  exact path="/home/find" component={Find}/>
      </div>
    )
  }
}

export default Home;
