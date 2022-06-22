import React, { Component } from 'react'
import XucXac from '../BaiTapRedux/XucXac'
import './GameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'

export default class GameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <p className='title-game text-center mt-5 display-4'>Game Xuc Sac</p>
                <div className='row text-center mt-2'>
                    <div className='col-5'>
                        <button className='btnGame'>Tai</button>
                    </div>
                    <div className='col-2'>
                        <XucXac></XucXac>
                    </div>
                    <div className='col-5'>
                        <button className='btnGame'>Xiu</button>
                    </div>
                </div>
                <div className='thongTinTroChoi text-center'>
                    <ThongTinTroChoi></ThongTinTroChoi>
                    <button className='btn btn-success mt-2 p-2 display-4'>PLay game</button>
                </div>
            </div>

        )
    }
}
