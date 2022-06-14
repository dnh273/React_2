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
      donGia: sanPham.giaBan,
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



  xoaGioHang = (maSP) => {
    // thuc hien chuc nang xoa
    console.log(maSP)

    let index = this.state.gioHang.findIndex(spGioHang => spGioHang.maSP === maSP);
    if (index !== -1) {
      this.state.gioHang.splice(index, 1)
    }

    this.setState({
      gioHang: this.state.gioHang
    })

  }

  tinhTongSoLuong = () => {
    // Dung for
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong
    // }
    // return tongSoLuong;

    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
      return tongSoLuong += spGioHang.soLuong;
    }, 0).toLocaleString();
  }


  render() {
    return (
      <div className='container-fluid'>
        <h3 className='text-center'>Bai tap gio hang  </h3>
        <div className='text-right'>
          <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i className='fa fa-cart mr-5'><i className="fa fa-cart-arrow-down"></i>{this.tinhTongSoLuong()}Gio hang</i>

          </span>

        </div>
        <CartModal xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang}></CartModal>
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    )
  }
}
