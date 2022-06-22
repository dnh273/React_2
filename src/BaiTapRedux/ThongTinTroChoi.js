import React, { Component } from 'react'
import { connect } from 'react-redux'


class ThongTinTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4'>BAN CHON: <span className='text-danger'>{this.props.taiXiu ? 'TAI' : 'XIU'}</span></div>
                <div className='display-4'>BAN THANG: <span className='text-success'>{this.props.soBanThang}</span></div>
                <div className='display-4'>TONG SO BAN: <span className='text-primary '>{this.props.tongSoBan}</span></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
        taiXiu: state.BaiTapGameXucXacReducer.taiXiu,
        tongSoBan: state.BaiTapGameXucXacReducer.tongSoBanChoi
    }
}

export default connect(mapStateToProps)(ThongTinTroChoi)