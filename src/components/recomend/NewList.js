import React from 'react'
import axios from 'axios'
import '../../css/newlist.css'
class NewList extends React.Component {
  constructor () {
    super()
    this.state = {
      newList: []
    }
  }
  getNewList () {
    return new Promise((resolve,reject) => {
      axios.get('./song.json').then( res => {
        console.log(res)
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
  componentWillMount () {
    this.getNewList().then(res => {
      console.log(res)
      let newList = res
      this.setState({newList})
    })
  }
  newList () {
    if(this.state.newList.length){
      let newlist = this.state.newList.map((e,i) => {
        return (
          <li key={i} className="newlist-item">{e.name}</li>
        )
      })
      return newlist
    }
  }
  render () {
    return (
      <div id='newlist'>
        {this.newList()}
      </div>
    )
  }
}

export default NewList