import React, { Component } from 'react'

export default class ProductItemEXC extends Component {

  render() {

    let { sanPhamProps } = this.props;

    return (
      <div>
        <div className="card text-left">
          <img style={{ width: 200, height: 350 }} className="card-img-top" src={sanPhamProps.hinhAnh} alt={sanPhamProps.hinhAnh} />
          <div className="card-body text-center">
            <h4 className="card-title">{sanPhamProps.tenSP}</h4>
            <p className="card-text">{sanPhamProps.giaBan}</p>
            <button className='btn btn-success' onClick={() => { }}>Them gio hanh</button>
          </div>
        </div>
      </div>
    )
  }
}
