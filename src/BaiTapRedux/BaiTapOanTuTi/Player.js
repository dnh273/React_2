import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className='d-flex'>
                <div className='theThink'>
                    <img width={100} height={100} src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} alt='' />
                </div>
                <div className='speech-bubble'>

                </div>
                <img style={{ width: 200, height: 200 }} src='./img/GameOanTuTi/player.png' alt='./img/GameOanTuTi/player.png' />

                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {

                        // Xet gia tri dat cuoc them cho item duoc chon

                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' };
                        }




                        return <div className='col-4' key={index}>
                            <button onClick={() => {
                                this.props.datCuoc(item.ma)
                            }} style={border} className='btnItem'>
                                <img width={35} height={35} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                        </div>
                    })}


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BAO_BUA',
                maCuoc

            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)