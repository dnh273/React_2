import React, { Component } from 'react'
import CartModal from './CartModal'
import ProductListEXC from './ProductListEXC'

export default class ExcerciseCart extends Component {


  render() {
    return (
      <div className='container-fluid'>
        <h3 className='text-center'>Bai tap gio hang  </h3>
        <div className='text-right'>
          <span style={{ width: 17, cursor: 'pointer' }} data-toggle="modal" data-target="#modelId">
            <i className='fa fa-cart mr-5'><i class="fa fa-cart-arrow-down"></i>Gio hang</i>

          </span>

        </div>
        <CartModal></CartModal>
        <ProductListEXC></ProductListEXC>
      </div>
    )
  }
}
