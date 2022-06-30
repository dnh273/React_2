import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
    render() {
        return (

            <div>

                <div className='mt-5'>
                    <button className='gheDuocChon mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe da dat
                    </span>

                    <br></br>

                    <button className='gheDangChon mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe dang chon
                    </span>

                    <br></br>

                    <button className='ghe mr-1' style={{ marginLeft: 0 }}>
                    </button>
                    <span className='text-light' style={{ fontSize: '20px' }}>
                        Ghe
                    </span>
                </div>

                <div className='mt-5'>
                    <table class="table" border='2'>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '20px' }}>
                                <th>So ghe</th>
                                <th>Gia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>So ghe</th>
                                <th>Gia</th>
                                <th></th>
                            </tr>

                            <tr>
                                <th>So ghe</th>
                                <th>Gia</th>
                                <th></th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
