import React from "react";
import Footer from "../footer";
import Header from "../header";
import Menu from "./menu";
import Body from "./body";
export default function Learn() {
  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className="sm:mt-[88px] md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <p className="mb-8 text-[36px] font-bold pt-[24px]">Variable</p>
        <div className="flex">
          <div className="w-[20%]">
            <Menu />
          </div>
          <div className="w-[80%]">
            <Body />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
