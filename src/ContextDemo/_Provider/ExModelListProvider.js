import React, { Component } from 'react'
import { ExModelListContext } from '../_Context/ExModelListContext'

export default class ExModelListProvider extends Component {

    state = {
        modelListState: [
            { "id": 1, "name": "Tào Tháo", "age": 65, "img": "./img/model/model1.png", "like": 0, "active": true },
            { "id": 2, "name": "Gia Cát Lượng", "age": 54, "img": "./img/model/model2.jpg", "like": 0, "active": false },
            { "id": 3, "name": "Joker", "age": 35, "img": "./img/model/model3.jpg", "like": 0, "active": false },
            { "id": 4, "name": "Trâm Anh", "age": 18, "img": "./img/model/model4.jpg", "like": 0, "active": false }
        ]
    }

    setActiveModel = (id) => {
        let modelListStateUpdate = this.state.modelListState.map((model, index) => {
            // So sanh voi id duoc click
            if (model.id === id) {
                model.like += 1;
                model.active = true
            } else {
                model.active = false
            }
            return { ...model }
        });
        // Sau khi xu ly mang cap nhat lai gia tri state de giao dien render lai
        this.setState({
            modelListState: modelListStateUpdate
        })
    }

    render() {
        return (
            <ExModelListContext.Provider value={{ modelListState: this.state.modelListState, setActiveModel: this.setActiveModel }}>
                {this.props.children}
            </ExModelListContext.Provider>
        )
    }
}
