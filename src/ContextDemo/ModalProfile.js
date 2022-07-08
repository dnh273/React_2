import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class ModalProfile extends Component {
  render() {
    return (

      <ModelContext.Consumer>
        {(value) => {

          return <div className='mt-5'>
            <h3>Profile</h3>

            <div className="card text-white bg-dark" style={{ width: 300 }}>
              <img className="card-img-top" src="https://anhgaixinh.us/wp-content/uploads/2021/07/SAINT-Photolife-Zenny-Romance-MrCong1.com-032.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Ten: Nguyen Huong Ly</h4>
                <p className="card-text">Tuoi: 22</p>
                <span style={{ color: 'pink' }}> {value.stateLike} <i className='fa fa-heart'></i></span>
              </div>
            </div>
          </div>

        }
        }
      </ModelContext.Consumer>
    )
  }
}
