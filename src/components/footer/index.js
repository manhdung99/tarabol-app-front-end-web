import React from "react";
export default function Footer() {
  const learnItems = ["Feature Posts", "Repition Algorithm", "Services"];
  return (
    <footer className="bg-[#4337C9] mt-[48px] fixed w-full bottom-0 ">
      <div className=" sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto flex flex-col md:py-[24px] lg:py-[64px] mx-auto">
        <div className="flex w-[100%]">
          <div className="sm:w-[25%] md-w-[30%]">
            <p className="text-white font-bold sm:text-[12px] md:text-[18px] lg:text-[24px]">
              Tarabol Co ., Ltd
            </p>
          </div>
          <div className="sm:w-[25%] md:w-[20%]">
            <p className="text-white font-bold sm:text-[12px] md:text-[18px] lg:text-[24px]">
              Marketplace
            </p>
          </div>
          <div className="w-[20%]">
            <p className="text-white font-bold sm:text-[12px] md:text-[18px] lg:text-[24px]">
              Learn
            </p>
            <ul>
              {learnItems.map((item) => (
                <li
                  key={item}
                  className=" sm:text-[12px] md:text-[16px] lg:text-[20px] text-white sm:mt-2 md:mt-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[30%]">
            <p className="text-white font-bold sm:text-[12px] md:text-[18px] lg:text-[24px]">
              Get in touch
            </p>
            <p className="text-white font-bold sm:text-[12px] md:text-[18px] lg:text-[24px] sm:mt-2 md:mt-4">
              Da Nang (Headquarter)
            </p>
            <p className="sm:text-[12px] md:text-[16px] lg:text-[20px] text-white sm:mt-2 md:mt-4">
              261 Nguyễn Văn Linh, District Hai Chau, Da Nang City
            </p>
          </div>
        </div>
        <div className="  md:mt-[24px] lg:mt-[48px] border-t-[1px] border-white">
          <p className="text-white text-center mt-[4px] sm:text-[14px]  md:text-[18px] lg:text-[24px] font-bold">
            © 2022 Tarabol, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
