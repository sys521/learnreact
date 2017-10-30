import React from 'react'
import axios from 'axios'
import '../../css/recomendlist.css'
import {Link} from 'react-router-dom'

class RecomendList extends React.Component {
  constructor () {
    super()
    console.log('eeeee')
    this.state={
      recomendList: []
    }
  }
  loader = async () => {
    let recomendList = await this.getDate('test.json')
    this.setState({recomendList})
  }
  componentWillMount () {
    this.loader()
  }
  getDate (url) {
    return new Promise((resolve,reject) => {
      axios.get(url).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
  
  doit () {
    if (this.state.recomendList.length) {
      let list = this.state.recomendList.map((e,i,arr) => {
        return (
          <Link className='rlist-item' to={`/playsong/${e.id}`}  key={i}>
            <img src={e.url}/>
            <p>{e.title}</p>
          </Link>
        )
      })
      return list
    }
  }
  render () {
    let list = this.doit()
    return (
      <ul className='rlist'>
        {list}
      </ul>
    )
  }
}
export default RecomendList
