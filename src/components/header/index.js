import React from "react";
import elephant from "./elephant.svg";
import cap from "./cap.svg";
import NavBar from "./NavBar";
import User from "./User";
import Image from "./image.png";
function Header() {
  return (
    <header className=" px-[32px] relative mx-auto flex pt-[24px] justify-between">
      <div className="flex">
        <div className="">
          <img
            src={elephant}
            alt="Logo"
            className="relative w-[102px] h-[78px] left-[25px]"
          />
          <img
            src={cap}
            alt="Logo"
            className="absolute w-[49px] h-[42px] left-[96px] top-[7px]"
          />
        </div>
        <NavBar />
      </div>
      <User src={Image} userName="DungNM25" />
    </header>
  );
}

export default Header;
