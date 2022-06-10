import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {


    renderProductItem = () => {
        // this,props,productsData lay tu ExcerciseCarStore
        return this.props.productsData.map((product, index) => {
            return (
                <div key={index} className='col-3'>
                    <ProductItem xemChiTiet={this.props.xemChiTiet} item={product}></ProductItem>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderProductItem()}
                </div>
            </div>
        )
    }
}
