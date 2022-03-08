import React from "react";
import Header from "../header";
import Menubar from "./menubar";
import Footer from "../footer";
import BodyItem from "./bodyitem";
import { connect } from "react-redux";
function Market({ isLogin }) {
  return (
    <>
      <Header isLogin={isLogin} isSearch={true} />
      <div className="max-w-7xl lg:max-w-[1200px] mx-auto flex mt-4 ">
        <div className="w-[20%]">
          <Menubar />
        </div>
        <div className="w-[80%] relative">
          <BodyItem />
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.userReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(Market);
