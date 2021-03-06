import React from 'react';
import Home from './Home.js'
import PlaySong from './components/PlaySong.js'
import './App.css'
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'
class App extends React.Component {
  render () {
    return (
      <div id="app">
        <Router>
          <Switch>
            <Route  path='/home' component={Home}/>
            <Route  path="/playsong/:id" component={PlaySong}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App