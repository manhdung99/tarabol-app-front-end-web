import React from "react";
import Header from "../header";
import Sologan from "./sologan";
import Introdule from "./introdule";
import LearnAbout from "./learnAbout";
import Footer from "../footer";
import WhyUs from "./whyus";
export default function HomePage() {
  return (
    <div>
      <Header isSearch={false} isLogin={false} />
      <div className=" md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <Sologan />
        <LearnAbout />
        <Introdule />
        <WhyUs />
        {/* <Connect /> */}
      </div>
      <Footer />
    </div>
  );
}
