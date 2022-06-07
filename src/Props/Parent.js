import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'

export default class Parent extends Component {

    src = "https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
    name = "camera new"
    render() {
        return (
            <div>
                <input type='password' />
                {/* <Child propSource={this.src} name={this.name} />
                <Child propSource={'https://www.getolympus.com/media/wysiwyg/home/OM-1_Billboard_V2.jpg'} name={'camera1'} />
                <Child propSource={'https://www.getolympus.com/media/wysiwyg/home/OM-1_Billboard_V2.jpg'} name={'camera2'} />
                <Child propSource={'https://www.getolympus.com/media/wysiwyg/home/OM-1_Billboard_V2.jpg'} name={'camera3'} /> */}
                <ChildFunctional propSource={this.src} name={this.name} />
            </div>
        )
    }
}
