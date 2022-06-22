import React, { Component } from 'react'

export default class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4'>BAN CHON: <span className='text-danger'>TAI</span></div>
                <div className='display-4'>BAN THANG: <span className='text-success'>1</span></div>
                <div className='display-4'>TONG SO BAN: <span className='text-primary '>1</span></div>
            </div>
        )
    }
}
