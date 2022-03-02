import React from "react";
import connect from "../image/connect.png";
export default function Introdule() {
  return (
    <div className=" max-w-5xl mx-auto py-6 ">
      <p className="font-bold text-4xl text-black text-center w-full py-8">
        Connect with us?
      </p>
      <div className="flex items-center">
        <div className="flex-[3] bg-[#c4c4c447] h-[400px] mr-8"></div>
        <div className="flex-[2] ml-16">
          <img src={connect} alt="img" />
        </div>
      </div>
    </div>
  );
}
