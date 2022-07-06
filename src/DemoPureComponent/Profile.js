import React, { Component, PureComponent } from 'react'

export default class Profile extends PureComponent {
    render() {
        console.log('load')
        return (
            <div>

                <div className="card text-white bg-primary" style={{ width: 250 }}>
                    <img style={{ width: 250, height: 300 }} className="card-img-top" src="https://image-us.24h.com.vn/upload/1-2022/images/2022-03-16/baukrysie_275278910_3174792849424333_1380029197326773703_n-1647427653-670-width1440height1800.jpg" alt="" />
                    <div className="card-body">
                        <h3>So luong tim: <i className="fa fa-thumbs-up"></i> {this.props.like.soLuong}</h3>
                        <h4 className="card-title">Ho ten: Le Thi A</h4>
                        <p className="card-text">Tuoi: 18</p>
                    </div>
                </div>

            </div>
        )
    }
}
