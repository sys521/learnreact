import React from 'react'
import '../../css/psheader.css'
class PsHeader extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div className='ps-header'>
        <div className='pointer'>
          <img src='http://s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862'/>
        </div>
        <div className='roude'>
          <img className='roude-bottom' src='http://s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48'/>
          <img className='roude-middle' src='http://s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577'/>
          <img className='roude-top' src={this.props.cover}/>
        </div>
      </div>
    )
  }
}
export default PsHeader