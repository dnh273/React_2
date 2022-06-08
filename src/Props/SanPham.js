import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let { sanPhamProps } = this.props;
        let { xemChiTiet } = this.props;

        return (
            <div>
                <div className="card text-left text-center">
                    <img style={{ width: 250, height: 250, marginLeft: 50 }} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPhamProps.tenSP}</h4>
                        <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
                        <button onClick={() => { xemChiTiet(sanPhamProps) }} className='btn btn-success'>Xem chi tiet</button>
                    </div>
                </div>
            </div>
        )
    }
}
