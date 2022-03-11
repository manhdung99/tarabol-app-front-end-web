import React from "react";
import Header from "../header";
import Menubar from "./menubar";
import Footer from "../footer";
import BodyItem from "./bodyitem";
function Market() {
  return (
    <>
      <Header isSearch={true} />
      <div className=" sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex sm:flex-col md:flex-row mt-4 ">
        <div className="sm:w-[100%] md:w-[20%]">
          <Menubar />
        </div>
        <div className="sm:w-[100%] md:w-[80%] relative">
          <BodyItem />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Market;
