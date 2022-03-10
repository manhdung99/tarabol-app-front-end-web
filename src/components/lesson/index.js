import React, { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Lesson({ num_cards, level, title, image, card_evaluation }) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.background = "url(" + image + ")";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      ref={ref}
      className=" w-[256px] relative shadow-md shadow-[#00000040] rounded-[12px] pt-[25%] mb-[2rem] hover:scale-[1.05]"
    >
      <div className="bg-[#fff] px-[8px] border-[1px] border-black rounded-b-[8px] border-t-0">
        <div className="flex justify-between">
          <div>
            <div>
              <p className="font-bold text-[15px]">{title}</p>
              <div className="flex pb-4">
                <p className="mr-[4px] text-[10px] text-[#BDBDBD]">
                  Level {level}
                </p>
                <p className="mr-[4px] text-[10px] text-[#BDBDBD]">
                  {num_cards} Cards
                </p>
              </div>
            </div>
            <div className="py-2">
              <Link
                className="px-[20px] py-[4px] border-[1px] font-semibold text-[12px] border-black mr-4"
                to=" /"
              >
                Learn
              </Link>
              <Link
                className="px-[20px] py-[4px] border-[1px] font-semibold text-[12px] border-black"
                to=" /"
              >
                Practice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
