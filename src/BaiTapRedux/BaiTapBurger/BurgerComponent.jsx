import React, { Component } from "react";
import "./burger.css";
import { connect } from "react-redux/es/exports";

class BurgerComponent extends Component {
  renderBurger = () => {
    let key = 0;
    let middleBurger = [];
    let { arrayBurger } = this.props;
    for (let item in arrayBurger) {
      for (let i = 0; i < arrayBurger[item]; i++) {
        middleBurger.push(
          <div key={key} className={item}>
            {" "}
          </div>
        );
        key += 1;
      }
    }
    return middleBurger;
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Burger cua ban</h3>
        <div className="breadTop"></div>

        {this.renderBurger()}

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state.BaiTapBurgerReducer.burger);
  return {
    arrayBurger: state.BaiTapBurgerReducer.burger,
  };
};

export default connect(mapStateToProps)(BurgerComponent);
