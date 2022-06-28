import React, { Component } from 'react'
import Computer from './Computer'
import './GameOanTuTi.css'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className='gameOanTuTi'>
                <div className='row text-center mt-5'>
                    <div className='col-4 mt-5'>
                        <Player></Player>
                    </div>
                    <div className='col-4 mt-5'>
                        <KetQuaTroChoi></KetQuaTroChoi>
                        <button className='btn btn-success p-3 display-4 mt-5'>Play game</button>
                    </div>
                    <div className='col-4 mt-5'>
                        <Computer></Computer>
                    </div>

                </div>

            </div>
        )
    }
}
