import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='theThink'>
                    <img width={100} height={100} src='./img/GameOanTuTi/bao.png' alt='' />
                </div>
                <div className='speech-bubble'>

                </div>
                <img style={{ width: 200, height: 200 }} src='./img/GameOanTuTi/player.png' alt='./img/GameOanTuTi/player.png' />

                <div className='row'>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35} src='./img/GameOanTuTi/bao.png' alt='' />
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35} src='./img/GameOanTuTi/bao.png' alt='' />
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35} src='./img/GameOanTuTi/bao.png' alt='' />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
