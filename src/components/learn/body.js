import React from "react";
import { useRef, useEffect } from "react";
export default function Body() {
  const questionRef = useRef();
  const answerRef = useRef();
  let rot = 360;
  useEffect(() => {
    answerRef.current.style.display = "none";
  });
  const handleShowAnswer = () => {
    questionRef.current.style = "transform: rotateX(" + rot + "deg)";
    setTimeout(() => {
      questionRef.current.style.display = "none";
      answerRef.current.style.display = "block";
    }, 500);
  };
  const handleShowQuestion = () => {
    answerRef.current.style.display = "block";
    answerRef.current.style = "transform: rotateX(" + rot + "deg)";
    rot += 360;
    setTimeout(() => {
      questionRef.current.style.display = "block";
      answerRef.current.style.display = "none";
    }, 500);
  };
  return (
    <div className="max-w-[87.5%]">
      <div
        onClick={() => handleShowAnswer()}
        ref={questionRef}
        className="  h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
      >
        <p className="max-w-[70%] text-[24px] mx-auto mt-[48px]">
          Question and Answer For this, when user click on the card, the card
          will be flipped to show question or answer
        </p>
        <p className="text-center text-[red]">Question</p>
      </div>
      <div
        onClick={() => handleShowQuestion()}
        ref={answerRef}
        className=" h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
      >
        <p className="max-w-[70%] text-[24px] mx-auto mt-[48px]">
          Question and Answer For this, when user click on the card, the card
          will be flipped to show question or answer
        </p>
        <p className="text-center text-[red]">Answer</p>
      </div>
      <p className="text-center text-[red] text-[36px] my-[16px]">
        <span>5</span>/<span>20</span>
      </p>
      <div className="flex justify-between">
        <div className="w-[175px] h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
          Easy
        </div>
        <div className="w-[175px] h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
          Medium
        </div>
        <div className="w-[175px] h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
          Hard
        </div>
        <div className="w-[175px] h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer">
          Very Hard
        </div>
      </div>
    </div>
  );
}
