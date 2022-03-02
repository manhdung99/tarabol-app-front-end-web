import React from "react";
import whoweare from "../image/whoweare.png";
export default function Introdule() {
  return (
    <div className=" max-w-7xl mx-auto">
      <p className="font-bold text-4xl text-black text-center w-full py-8">
        Who are we?
      </p>
      <div className="flex items-center">
        <div className="flex-[3]">
          <p className="font-[600] text-[20px] mr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,{" "}
          </p>
        </div>
        <div className="flex-[2] ml-24">
          <img src={whoweare} alt="img" />
        </div>
      </div>
      <div className="grid grid-cols-3 mt-12">
        <div className="bg-[#D6F3FF] w-[341px] h-[206px] mx-auto flex items-center justify-center">
          Lorem Ipsum is simply dummy
        </div>
        <div className="bg-[#D6F3FF] w-[341px] h-[206px] mx-auto flex items-center justify-center">
          Lorem Ipsum is simply dummy
        </div>
        <div className="bg-[#D6F3FF] w-[341px] h-[206px] mx-auto flex items-center justify-center">
          Lorem Ipsum is simply dummy
        </div>
      </div>
    </div>
  );
}
