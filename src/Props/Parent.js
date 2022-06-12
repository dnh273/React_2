import React, { Component } from 'react'
import Child from './Child'
import ChildFunctional from './ChildFunctional'

export default class Parent extends Component {

    state = { title: 'believe yourself' }

    changeTitle = () => {
        this.setState({
            title: 'Me'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                {/* <button className='btn btn-success' onClick={this.changeTitle}></button> */}
                <h3>Danh Sach San Pham</h3>
                {/* {this.props.children[1]} */}
                {this.props.children.map((com, index) => {
                    return com;
                })}

            </div>
        )
    }
}
