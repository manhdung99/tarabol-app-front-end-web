import React from "react";
import Header from "../header";
import UserMenuBar from "./usermenubar";
import Footer from "../footer";
import UserBody from "./userbody";
export default function UserPage() {
  return (
    <>
      <Header isSearch="true" isLogin={true} />
      <div className="max-w-7xl xl:max-w-[1200px] mx-auto flex mt-4">
        <div className="w-[20%]">
          <UserMenuBar />
        </div>
        <div className="w-[80%] relative">
          <UserBody />
        </div>
      </div>
      <Footer />
    </>
  );
}
