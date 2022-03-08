import React from "react";
import changinfomation from "../image/changinfomation.png";
import enjoystudy from "../image/enjoystudy.png";
import learnfast from "../image/learnfast.png";
import remember from "../image/remember.png";
export default function WhyUs() {
  return (
    <div className="">
      <p className="font-bold text-[65px] text-black text-center w-full py-8">
        Why Us?
      </p>
      <div className="flex items-center justify-between">
        <div className="w-[50%]">
          <p className="text-center font-bold text-[40px]">Learn faster</p>
          <p className="font-[400] text-[35px] text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="w-[40%]">
          <img src={learnfast} alt="img" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-12">
        <div className="w-[40%]">
          <img src={remember} alt="img" />
        </div>
        <div className="w-[50%]">
          <p className="text-center font-bold text-[40px]">Remember longer</p>
          <p className="font-[400] text-[35px] text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
}
