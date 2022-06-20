import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import ProductListRedux from './ProductListRedux'

// Import thu vien connect ket noi component - redux store
import { connect } from 'react-redux'


class BaiTapGioHangRedux extends Component {

    renderSoLuong = () => {
        return this.props.gioHang.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += spGH.soLuong;
        }, 0).toLocaleString();
    }

    render() {
        return (
            <div className='container'>
                <h3>Danh sach gio hang</h3>
                <div className='text-right'>
                    <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
                        <i className='fa fa-cart mr-5'><i className="fa fa-cart-arrow-down"></i>{this.renderSoLuong()}Gio hang</i>
                    </span>
                </div>
                <ProductListRedux></ProductListRedux>
                <GioHangRedux></GioHangRedux>
            </div>
        )
    }
}
// Viet ham lay gia tri state tu redux store ve bien thanh props component 
const mapStateToProps = (state) => {
    return {
        gioHang: state.stateGioHang.gioHang
    }
}

export default connect(mapStateToProps)(BaiTapGioHangRedux)