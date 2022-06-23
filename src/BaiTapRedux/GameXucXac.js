import React, { Component } from 'react'
import XucXac from '../BaiTapRedux/XucXac'
import './GameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import { connect } from 'react-redux'

class GameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <p className='title-game text-center mt-5 display-4'>Game Xuc Sac</p>
                <div className='row text-center mt-2'>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(true) }} className='btnGame'>Tai</button>
                    </div>
                    <div className='col-2'>
                        <XucXac></XucXac>
                    </div>
                    <div className='col-5'>
                        <button onClick={() => { this.props.datCuoc(false) }} className='btnGame'>Xiu</button>
                    </div>
                </div>
                <div className='thongTinTroChoi text-center'>
                    <ThongTinTroChoi></ThongTinTroChoi>
                    <button onClick={() => { this.props.playGame() }} className='btn btn-success mt-2 p-2 display-4'>PLay game</button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            // tao action TaiXiu
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            // Gui len reducer
            dispatch(action);
        },
        playGame: () => {
            // Gui du lieu type PLAY_GAME len reducer
            dispatch({
                type: 'PLAY_GAME',
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(GameXucXac)