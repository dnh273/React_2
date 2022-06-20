import React, { Component } from 'react'

// Su dung thu vien ket noi voi redux
import { connect } from 'react-redux'
class ProductItemRedux extends Component {
    render() {

        let { product } = this.props;

        return (
            <div className="card text-left">
                <img className="card-img-top" style={{ width: 350, height: 350 }} src={product.hinhAnh} alt={product.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <p onClick={() => { }} className="card-text">{product.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => { this.props.themGioHang(product) }}>Them gio hanh</button>
                </div>
            </div>
        )
    }
}

// Ham gui du lieu len store
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            // Tao ra san pham gio hang
            let spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                donGia: sanPham.giaBan,
            }
            // console.log('spGioHang', spGioHang);
            // Tao ra action
            let action = {
                type: 'THEM_GIO_HANG', //  Thuoc tinh bat buoc cua action
                spGioHang
            };

            // Dung ham dispatch tu redux =? gui du lieu len render
            dispatch(action);
        }
    }
}


export default connect(null, mapDispatchToProps)(ProductItemRedux)