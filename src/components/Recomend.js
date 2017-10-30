import React from 'react'
import RecomendList from './recomend/RecomendList'
import '../css/recomend.css'
import NewList from './recomend/NewList'
class Recomend extends React.Component {
  render () {
    return (
      <div className='recomend'>
        <div className='r-header'>推荐音乐</div>
        <RecomendList></RecomendList>
        <div className='r-new'>推荐列表</div>
        <NewList></NewList>
      </div>
    )
  }
}
export default Recomend
