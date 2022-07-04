import { type } from '@testing-library/user-event/dist/type'
import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
import { HUY_GHE } from '../../Redux/types/BaiTapDatVeType'

class ThongTinDatGhe extends Component {
    render() {
        return (

            <div>

                <div className='mt-5'>
                    <button className='gheDuocChon mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe da dat
                    </span>

                    <br></br>

                    <button className='gheDangChon mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe dang chon
                    </span>

                    <br></br>

                    <button className='ghe mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe
                    </span>
                </div>

                <div className='mt-5'>
                    <table class="table" border='2'>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '20px' }}>
                                <th>So ghe</th>
                                <th>Gia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr className='text-warning' key={index}>

                                    <td className=''>{gheDangDat.soGhe}</td>
                                    <td className=''>{gheDangDat.gia}</td>
                                    <td><button onClick={() => {
                                        this.props.dispatch({
                                            type: HUY_GHE,
                                            soGhe: gheDangDat.soGhe
                                        }
                                        )
                                    }}> Huy? </button></td>
                                </tr>
                            })}

                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>

                                <td></td>
                                <td>Tong Tien</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia;
                                }, 0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)