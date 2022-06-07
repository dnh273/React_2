import React, { Component } from 'react'

export default class ProductItem extends Component {



  render() {
    return (
      <div style={{ style: '300px' }} className="card text-left">
        <img className="card-img-top" src={this.props.dataProductItem.image} alt={this.props.dataProductItem.image} />
        <div className="card-body">
          <h4 className="card-title">{this.props.dataProductItem.name}</h4>
          <p className="card-text">{this.props.dataProductItem.price}</p>
          <button className='text-white w3-button w3-black'>View detail</button>

        </div>
      </div>

    )
  }
}
