import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExcerciseCart extends Component {

  state = {
    gioHang: [
    ]
  }

  themGioHang = (sanPham) => {
    console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.donGia,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    }



    // TIm xem san pham da co trong gio hang chua
    let index = this.state.gioHang.findIndex(spGH => spGH.maSP === spGioHang.maSP)

    if (index !== -1) {
      // TIm thay san pham duoc click chua trong gio hang => Tang so luong
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.gioHang[index].soLuong += 1;
    } else {
      // Khong tim thay san pham trong gio hang => them san pham vao gio hang
      this.state.gioHang.push(spGioHang)
    }


    // push vao state.gioHang
    // let gioHangCapNhat = [...this.state.gioHang, spGioHang]

    this.setState({
      gioHang: this.state.gioHang
    })
  }


  render() {
    return (
      <div className='container-fluid'>
        <h3 className='text-center'>Bai tap gio hang  </h3>
        <div className='text-right'>
          <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i className='fa fa-cart mr-5'><i className="fa fa-cart-arrow-down"></i>(0)Gio hang</i>

          </span>

        </div>
        <CartModal gioHang={this.state.gioHang}></CartModal>
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    )
  }
}
