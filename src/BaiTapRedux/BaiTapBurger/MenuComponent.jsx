import React, { Component } from "react";
import { connect } from "react-redux";

class MenuComponent extends Component {
  // renderMenu = () => {
  //   let i = 0;
  //   let { burgerState, soLuongBurger, giaTienBurger } = this.props;
  //   let menuRender = [];
  //   for (let item in burgerState) {
  //     menuRender.push(<tr></tr>);
  //     for (i in soLuongBurger) {
  //       menuRender.push(<th>{i}</th>, <th>{soLuongBurger[i]}</th>);
  //       i++;
  //       break;
  //     }
  //     for (i in giaTienBurger) {
  //       menuRender.push(<th>{giaTienBurger[i]}</th>);
  //       break;
  //     }
  //     i += 1;
  //   }
  //   return menuRender;
  // };

  render() {
    return (
      <div>
        <h3 className="text-center">Chon thuc an</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Thuc an</th>
              <th>So luong</th>
              <th>Don gia</th>
              <th>Thanh tien</th>
            </tr>
          </thead>
          {/* <tbody>{this.renderMenu()}</tbody> */}
          <tbody>
            <tr>
              <th>salad</th>
              <td>
                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.soLuongBurger.salad,
                      true
                    )
                  }
                  className="btn btn-success"
                >
                  +
                </button>
                {this.props.soLuongBurger.salad}

                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.soLuongBurger.salad,
                      false
                    )
                  }
                  className="btn btn-danger"
                >
                  -
                </button>
              </td>
              <td>{this.props.giaTienBurger.salad}</td>
              <td>
                {this.props.giaTienBurger.salad *
                  this.props.soLuongBurger.salad}
              </td>
            </tr>
            <tr>
              <th>cheese</th>
              <td>
                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.soLuongBurger.cheese,
                      true
                    )
                  }
                  className="btn btn-success"
                >
                  +
                </button>
                {this.props.soLuongBurger.cheese}

                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.soLuongBurger.cheese,
                      false
                    )
                  }
                  className="btn btn-danger"
                >
                  -
                </button>
              </td>
              <td>{this.props.giaTienBurger.cheese}</td>
              <td>
                {this.props.giaTienBurger.cheese *
                  this.props.soLuongBurger.cheese}
              </td>
            </tr>
            <tr>
              <th>beef</th>
              <td>
                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.giaTienBurger.cheese,
                      true
                    )
                  }
                  className="btn btn-success"
                >
                  +
                </button>
                {this.props.soLuongBurger.beef}

                <button
                  onClick={() =>
                    this.props.updateNumber(
                      this.props.soLuongBurger.beef,
                      false
                    )
                  }
                  className="btn btn-danger"
                >
                  -
                </button>
              </td>
              <td>{this.props.giaTienBurger.beef}</td>
              <td>
                {this.props.giaTienBurger.beef * this.props.soLuongBurger.beef}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Tong tien</th>
              <th>{this.props.burgerState.total}</th>
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
    soLuongBurger: state.BaiTapBurgerReducer.burger,

    // // // Gia tien Menu
    giaTienBurger: state.BaiTapBurgerReducer.menu,

    //burger State
    burgerState: state.BaiTapBurgerReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNumber: (burgerItem, tangGiam) => {
      let action = {
        type: "TANG_GIAM_SO_LUONG_FOOD",
        burgerItem,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(MenuComponent);
