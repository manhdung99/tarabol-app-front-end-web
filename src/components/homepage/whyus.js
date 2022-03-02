import React from "react";
import changinfomation from "../image/changinfomation.png";
import enjoystudy from "../image/enjoystudy.png";
import learnfast from "../image/learnfast.png";
import remember from "../image/remember.png";
export default function WhyUs() {
  return (
    <div className=" max-w-7xl mx-auto px-20 py-12">
      <p className="font-bold text-4xl text-black text-center w-full py-8">
        Why Us?
      </p>
      <div className="flex items-center">
        <div className="flex-[3] mr-16">
          <p className="text-center font-bold text-2xl">Learn faster</p>
          <p className="font-[400] text-[20px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="flex-[2] ml-24">
          <img src={learnfast} alt="img" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-[2] mr-24">
          <img src={remember} alt="img" />
        </div>
        <div className="flex-[3] ml-16">
          <p className="text-center font-bold text-2xl">Remember longer</p>
          <p className="font-[400] text-[20px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-[3] mr-16">
          <p className="text-center font-bold text-2xl">Study more enjoyable</p>
          <p className="font-[400] text-[20px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="flex-[2] ml-24">
          <img src={enjoystudy} alt="img" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex-[2] mr-24">
          <img src={changinfomation} alt="img" />
        </div>
        <div className="flex-[3] ml-16">
          <p className="text-center font-bold text-2xl">
            Chage infomation together
          </p>
          <p className="font-[400] text-[20px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
}
