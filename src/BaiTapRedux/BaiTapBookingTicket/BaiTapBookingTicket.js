import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'

export default class BaiTapBookingTicket extends Component {
    render() {
        return (
            <div className='bookingMovie' style={{ position: 'fixed', width: "100%", height: "100%", backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: 'cover' }}>
                <div style={{ backgroundColor: "rgba(0,0,0,.8)", position: 'fixed', width: '100%', height: '100%' }}>
                    <div className='container-fluid'>

                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className=' display-4 text-warning'>Dat ve Cyberlearn </div>
                                <div className='mt-5 text-light' style={{ fontSize: '15px' }}>Man hinh</div>
                                <div className='d-flex mt-1'>
                                    <div className='screen'></div>

                                </div>
                            </div>
                            <div className='col-4'>
                                <div style={{ fontSize: '35px' }} className='mt-2 text-light text-center'>Danh sach ghe ban chon</div>
                                <ThongTinDatGhe></ThongTinDatGhe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
