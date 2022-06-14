import React, { Component } from 'react'

export default class CartModal extends Component {

  renderCart = () => {
    let { gioHang } = this.props;
    return gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td><img style={{ width: 35, height: 35 }} src={spGioHang.hinhAnh} alt={spGioHang.hinhAnh} /></td>
          <td>{spGioHang.tenSP}</td>
          <td>{spGioHang.soLuong}</td>
          <td>{spGioHang.donGia}</td>
          <td>{spGioHang.donGia * spGioHang.soLuong}</td>
        </tr>
      )
    })
  }

  render() {
    let { gioHang } = this.props;
    return (
      <div>
        <div>
          {/* Button trigger modal */}

          {/* Modal */}
          <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" style={{ minWidth: 1000 }} role="document">
              <div className="modal-content">
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
                        <th>Ma san pham</th>
                        <th>Hinh anh</th>
                        <th>Ten san pham</th>
                        <th>So Luong</th>
                        <th>Don gia</th>
                        <th>Thanh tien</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderCart()}
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
