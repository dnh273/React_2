import React, { Component } from 'react'
import Computer from './Computer'
import './GameOanTuTi.css'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux/es/exports'

class GameOanTuTi extends Component {


    render() {



        return (
            <div className='gameOanTuTi'>
                <div className='row text-center mt-5'>
                    <div className='col-4 mt-5'>
                        <Player></Player>
                    </div>
                    <div className='col-4 mt-5'>
                        <KetQuaTroChoi></KetQuaTroChoi>
                        <button onClick={() => {
                            this.props.playGame()
                        }} className='btn btn-success p-3 display-4 mt-5'>Play game</button>
                    </div>
                    <div className='col-4 mt-5'>
                        <Computer></Computer>
                    </div>

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {


            let count = 0;
            // Khai bao ham lap di lap lai
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count++;
                if (count > 10) {
                    // Dung ham setInterval
                    clearInterval(randomComputerItem)
                    
                    dispatch({
                        type: 'END_GAME',
                        
                    })
                }
            }, 100)
        }
    }
}


export default connect(null, mapDispatchToProps)(GameOanTuTi)