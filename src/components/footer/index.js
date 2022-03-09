import React from "react";
export default function Footer() {
  const learnItems = ["Feature Posts", "Repition Algorithm", "Services"];
  return (
    <footer className="bg-[#4337C9] mt-[48px] ">
      <div className=" md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex flex-col md:py-[24px] lg:py-[64px] mx-auto">
        <div className="flex w-[100%]">
          <div className="w-[30%]">
            <p className="text-white font-bold md:text-[18px] lg:text-[24px]">
              Tarabol Co ., Ltd
            </p>
          </div>
          <div className="w-[20%]">
            <p className="text-white font-bold md:text-[18px] lg:text-[24px]">
              Marketplace
            </p>
          </div>
          <div className="w-[20%]">
            <p className="text-white font-bold md:text-[18px] lg:text-[24px]">
              Learn
            </p>
            <ul>
              {learnItems.map((item) => (
                <li
                  key={item}
                  className=" md:text-[16px] lg:text-[20px] text-white mt-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[30%]">
            <p className="text-white font-bold md:text-[18px] lg:text-[24px]">
              Get in touch
            </p>
            <p className="text-white font-bold md:text-[18px] lg:text-[24px] mt-4">
              Da Nang (Headquarter)
            </p>
            <p className="md:text-[16px] lg:text-[20px] text-white mt-4">
              261 Nguyễn Văn Linh, District Hai Chau, Da Nang City
            </p>
          </div>
        </div>
        <div className=" md:mt-[24px] lg:mt-[48px] border-t-[1px] border-white">
          <p className="text-white text-center mt-[4px]  md:text-[18px] lg:text-[24px] font-bold">
            © 2022 Tarabol, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
