import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PlaySong from './components/PlaySong.js'
class Index extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={App}/>
          <Route exact path='/playsong/:id' component={PlaySong}/>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
