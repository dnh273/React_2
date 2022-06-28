import React, { Component } from 'react'

export default class Computer extends Component {
  render() {
    return (
      <div>  <div className='d-flex'>
        <div className='theThink'>
          <img style={{ transform: 'rotate(270deg)' }} width={100} height={100} src='./img/GameOanTuTi/bao.png' alt='' />
        </div>
        <div className='speech-bubble'>

        </div>
        <img style={{ width: 200, height: 200 }} src='./img/GameOanTuTi/playerComputer.png' alt='./img/GameOanTuTi/playerComputer.png' />


      </div>
      </div>
    )
  }
}
