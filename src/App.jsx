import React, { Component } from "react";
import DemoProps from "./Props/DemoProps";
import ProductList from "./Props/ProductList";
import dataJson from "./Data/data.json";
import DanhSachSanPham from "./Props/DanhSachSanPham";
import ExcerciseCarStore from "./ExcerciseCarStore/ExcerciseCarStore";
import ExcerciseCart from "./Props/ExcerciseCart/ExcerciseCart";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <DanhSachSanPham></DanhSachSanPham> */}
        {/* <ExcerciseCarStore></ExcerciseCarStore> */}
        {/* <DemoProps></DemoProps> */}
        {/* <ExcerciseCarStore></ExcerciseCarStore> */}
        <ExcerciseCart></ExcerciseCart>
      </div>
      // <div className="container-fluid">
      //   {/* <DemoProps></DemoProps> */}
      //   <div className="row">
      //     <div className="col-4">
      //       <div
      //         className="nav flex-column nav-pills justify-content-center"
      //         style={{ minHeight: "500px" }}
      //         id="v-pills-tab"
      //         role="tablist"
      //         aria-orientation="vertical"
      //       >
      //         <a
      //           className="nav-link active"
      //           id="v-pills-home-tab"
      //           data-toggle="pill"
      //           href="#v-pills-home"
      //           role="tab"
      //           aria-controls="v-pills-home"
      //           aria-selected="true"
      //         >
      //           Home
      //         </a>
      //         <a
      //           className="nav-link"
      //           id="v-pills-profile-tab"
      //           data-toggle="pill"
      //           href="#v-pills-profile"
      //           role="tab"
      //           aria-controls="v-pills-profile"
      //           aria-selected="false"
      //         >
      //           Shop
      //         </a>
      //       </div>
      //     </div>
      //     <div className="productList col-8">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div
      //           className="tab-pane fade show active"
      //           id="v-pills-home"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-home-tab"
      //         >
      //           {/* <ProductList></ProductList> */}
      //           <ProductList arrProduct={dataJson}></ProductList>
      //         </div>
      //         <div
      //           className="tab-pane fade"
      //           id="v-pills-profile"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-profile-tab"
      //         >
      //           Shop
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
