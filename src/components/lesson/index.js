import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Lesson(props) {
  const ref = useRef();
  useEffect(() => {
    ref.current.style.background = "url(" + props.descriptionImg + ")";
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
              <p className="font-bold text-[15px]">Variable</p>
              <div className="flex pb-4">
                <p className="mr-[4px] text-[10px] text-[#BDBDBD]">Level 1</p>
                <p className="mr-[4px] text-[10px] text-[#BDBDBD]">10 Cards</p>
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
Lesson.propTypes = {
  title: PropTypes.string.isRequired,
  descriptionImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  //   .isRequired,
  // description: PropTypes.string.isRequired,
};

export default Lesson;