import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className='display-4 text-warning'>Ban thua !!!</div>
        <div style={{ fontSize: 35 }} className=' text-success'>So ban thang: <span className='text-warning'>0</span> </div>
        <div style={{ fontSize: 35 }} className=' text-success'>Tong so ban choi: <span className='text-warning'>0</span> </div>
      </div>
    )
  }
}
