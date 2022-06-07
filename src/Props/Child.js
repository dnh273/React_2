import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>

                <img style={{ width: '150px' }} src={this.props.propSource} alt="" />
                <div className="card text-left">
                    <img alt="" style={{ width: "200px" }} className="card-img-top" src={this.props.propSource} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>

            </div>
        )
    }
}
