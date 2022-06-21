import React, { Component } from 'react'

// Su dung thu vien connect de lay du lieu tu store ve
import { connect } from 'react-redux'

class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang)
        return (
            <div>
                <div>

                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{ minWidth: 800 }}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Gio hang</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Ma sp</th>
                                                <th>Hinh anh</th>
                                                <th>Ten san pham</th>
                                                <th>Gia</th>
                                                <th>So luong</th>
                                                <th>Thanh tien</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.gioHang.map((spGH, index) => {
                                                return <tr key={index}>
                                                    <td>{spGH.maSP}</td>
                                                    <td><img src={spGH.hinhAnh} alt={spGH.hinhAnh} width={50} height={50} /></td>
                                                    <td>{spGH.tenSP}</td>
                                                    <td>{spGH.donGia.toLocaleString()}</td>
                                                    <td>
                                                        <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, true) }}>+</button>
                                                        {spGH.soLuong}
                                                        <button className='btn btn-success' onClick={() => { this.props.tangGiamSoLuong(spGH.maSP, false) }}>-</button>
                                                    </td>
                                                    <td>{(spGH.soLuong * spGH.donGia).toLocaleString()}</td>
                                                    <td><button className='btn btn-danger' onClick={() => {
                                                        this.props.xoaGioHang(spGH.maSP)
                                                    }}
                                                    >Xoa</button></td>

                                                </tr>
                                            })}
                                        </tbody>
                                        <tfoot>
                                            <th colSpan={5}></th>
                                            <th>Tong tien</th>
                                            <th>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                                return tongTien += spGioHang.soLuong * spGioHang.donGia;
                                            }, 0).toLocaleString()}</th>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Dong</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

// Ham lay state redux bien doi thanh props cua componhent

const mapStateToProps = state => { // state la state tong chua cac ung dung cua state con (rootReducer)
    return {
        gioHang: state.stateGioHang.gioHang
    }

}

// Ham dua du lieu len reducer
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'XOA_GIO_HANG',
                maSP
            }
            //Dung phuong thuc dispatch redux cung cap de dua du lieu len reducer
            console.log(maSP)
            dispatch(action)
        },
        tangGiamSoLuong: (maSP, tangGiam) => { // tangGiam - true => Xu ly tang, tangGiam = false => Xu ly giam
            // tao action de dua du lieu len reducer
            let action = {
                type: 'TANG_GIAM_SO_LUONG',// Thuoc tinh bat buoc de biet chay vao case nao trong tat ca reducer
                maSP,
                tangGiam
            }
            // Dua action len reducer moi lan nguoi dung click vao
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)
