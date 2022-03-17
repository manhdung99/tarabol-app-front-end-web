import React from "react";

export default function Body() {
  const isPractice = true;

  return (
    <>
      {isPractice === true ? (
        <div className="sm:w-full md:max-w-[87.5%]">
          <div className=" h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer">
            <p className="max-w-[70%] text-[24px] mx-auto mt-[48px]">
              QUESTION HERE. JUST ONLY SHOW QUESTION FOR USER
            </p>
          </div>
          <p className="text-center text-[red] text-[36px] my-[16px]">
            <span>5</span>/<span>20</span>
          </p>
          <div className="flex justify-between">
            <div className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
              Answer A
            </div>
            <div className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
              Answer B
            </div>
            <div className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
              Answer C
            </div>
            <div className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
              Answer D
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[87.5%] ">
          <p className=" max-w-[80%] text-[52px] text-center  ">
            You are not study any card. So you can not practice. Please study
            first
          </p>
        </div>
      )}
    </>
  );
}
