import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
  render() {

    let keyfram = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50%{top: -50px}
      75% {top:100px;}
      100% {top: 0px}
  }`

    return (
      <div>  <div className='d-flex'>
        <style>
          {keyfram}
        </style>
        <div className='theThink' style={{ position: 'relative' }}>
          <img style={{ position: 'absolute', animation: `randomItem${Date.now()} 0.5s`, transform: 'rotate(270deg)' }} width={100} height={100} src={this.props.computer.hinhAnh} alt='' />
        </div>
        <div className='speech-bubble'>

        </div>
        <img style={{ width: 200, height: 200 }} src='./img/GameOanTuTi/playerComputer.png' alt='./img/GameOanTuTi/playerComputer.png' />
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    computer: state.BaiTapOanTuTiReducer.computer
  }
}

export default connect(mapStateToProps)(Computer)