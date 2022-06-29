import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className='display-4 text-warning'>{this.props.ketQua}</div>
        <div style={{ fontSize: 35 }} className=' text-success'>So ban thang: <span className='text-warning'>{this.props.soBanThang}</span> </div>
        <div style={{ fontSize: 35 }} className=' text-success'>Tong so ban choi: <span className='text-warning'>{this.props.soBanChoi}</span> </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ketQua: state.BaiTapOanTuTiReducer.ketQua,
    soBanThang: state.BaiTapOanTuTiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuTiReducer.soBanChoi

  }
}

export default connect(mapStateToProps)(KetQuaTroChoi)