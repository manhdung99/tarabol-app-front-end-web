import React from "react";
import Header from "../header";
import UserMenuBar from "./usermenubar";
import Footer from "../footer";
import UserBody from "./userbody";
export default function UserPage() {
  return (
    <>
      <Header isSearch="true" isLogin={true} />
      <div className=" flex sm:flex-col md:flex-row sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex md:mt-6 lg:mt-8">
        <div className="sm:w-[100%] md:w-[20%]">
          <UserMenuBar />
        </div>
        <div className="sm:w-[100%] md:w-[80%]  relative">
          <UserBody />
        </div>
      </div>
      <Footer />
    </>
  );
}
