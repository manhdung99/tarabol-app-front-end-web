import React from "react";
import Header from "../header";
import Menubar from "./menubar";
import Footer from "../footer";
import BodyItem from "./bodyitem";
function Market() {
  return (
    <>
      <Header isSearch={true} />
      <div className=" md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex mt-4 ">
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

export default Market;
