import React, { Component } from "react";
import { connect } from "react-redux";

class MenuComponent extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <th>{propsMenu}</th>
          <th>
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, 1);
              }}
              className="btn-success"
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              onClick={() => {
                this.props.addBreadMid(propsMenu, -1);
              }}
              className="btn-danger"
            >
              -
            </button>
          </th>
          <th>{price}</th>
          <th>{price * burger[propsMenu]}</th>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="text-center">Chon thuc an</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thuc an</th>
              <th>So luong</th>
              <th>Don gia</th>
              <th>Thanh tien</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Tong tien</th>
              <th>{this.props.total}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // So luong
    burger: state.BaiTapBurgerReducer.burger,

    // // // Gia tien Menu
    menu: state.BaiTapBurgerReducer.menu,

    //burger State
    total: state.BaiTapBurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amout) => {
      // Tao ra action
      const action = {
        type: "ADD_BREAD",
        propsBurger,
        amout,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
