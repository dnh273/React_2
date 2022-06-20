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
                                                    <td>{spGH.soLuong}</td>
                                                    <td>{(spGH.soLuong * spGH.donGia).toLocaleString()}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

// Ham lay state redux bien doi thanh props cua componhent

const mapStateToProps = state => { // state la state tong chua cac ung dung cua state con (rootReducer)
    return {
        gioHang: state.stateGioHang.gioHang
    }

}

export default connect(mapStateToProps)(GioHangRedux)
