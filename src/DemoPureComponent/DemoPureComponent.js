import React, { Component } from 'react'
import Profile from './Profile'

export default class DemoPureComponent extends Component {

    state = {
        like: { soLuong: 0 } // La object khong phai du lieuj nguyên thuỷ
    }

    // Không lạm dụng purecomponent
    likeImg = () => {
        let likeHienTai = this.state.like;
        likeHienTai.soLuong += 1;
        this.setState({
            like: { ...likeHienTai }
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='text-center'>Profile Le Thi A</h3>
                <Profile like={this.state.like}></Profile>

                <br></br>
                <div className="card text-white bg-default">
                    <h4 style={{ color: 'skyblue' }} className="card-title">Danh gia ({this.state.like.soLuong})</h4>
                    <div className="card-body">
                        <button className='btn' style={{ color: 'blue', border: '3px solid blue' }} onClick={() => {
                            this.likeImg()
                        }}>Luot thich <i className="fa fa-thumbs-up"></i></button>
                    </div>
                </div>

            </div >
        )
    }
}
