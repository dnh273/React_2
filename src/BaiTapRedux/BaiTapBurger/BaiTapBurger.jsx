import React, { Component } from "react";
import BurgerComponent from "./BurgerComponent";
import MenuComponent from "./MenuComponent";

export default class BaiTapBurger extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Bai Tap Burger</h2>
        <div className="row">
          <div className="col-6">
            <BurgerComponent></BurgerComponent>
          </div>
          <div className="col-6">
            <MenuComponent></MenuComponent>
          </div>
        </div>
      </div>
    );
  }
}
