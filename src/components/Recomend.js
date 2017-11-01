import React from 'react'
import RecomendList from './recomend/RecomendList'
import '../css/recomend.css'
import NewList from './recomend/NewList'
class Recomend extends React.Component {
  changeRouter (url) {
    this.props.history.push(url)
  }
  render () {
    console.log(this.props)
    return (
      <div className='recomend'>
        <div className='r-header'>推荐音乐</div>
        <RecomendList ></RecomendList>
        <div className='r-new'>推荐列表</div>
        <NewList changeRouter={this.changeRouter.bind(this)}></NewList>
      </div>
    )
  }
}
export default Recomend
