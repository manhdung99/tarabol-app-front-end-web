import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Body({ cards, num_practice_card, practice_card }) {
  const [isPractice, setIsPractice] = useState(true);
  const [currentPracticeCard, setCurrentPracticeCard] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(num_practice_card);
  useEffect(() => {
    let learnedArray = cards.filter((obj) => obj.status === true);
    if (learnedArray.length > 0) {
      setIsPractice(true);
    } else {
      setIsPractice(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = practice_card[currentIndex];
    setCurrentPracticeCard(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleSubmitAnswer = () => {
    setCurrentIndex((index) => index + 1);
  };

  return (
    <>
      {isPractice === true ? (
        currentIndex < practice_card.length ? (
          <div className="sm:w-full md:max-w-[87.5%]">
            <div className=" h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer flex items-center">
              <p className="max-w-[70%] text-[24px] mx-auto mt-[48px] text-center flex items-center text-[red]">
                {currentPracticeCard.question}
              </p>
            </div>
            <p className="text-center text-[red] text-[36px] my-[16px]">
              <span>{currentIndex + 1}</span>/<span>{num_practice_card}</span>
            </p>
            <div className="flex justify-between">
              <div
                onClick={() => handleSubmitAnswer()}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer A
              </div>
              <div
                onClick={() => handleSubmitAnswer()}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer B
              </div>
              <div
                onClick={() => handleSubmitAnswer()}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer C
              </div>
              <div
                onClick={() => handleSubmitAnswer()}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer D
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[87.5%] ">
            <p className=" max-w-[80%] text-[52px] text-center  ">
              You have completed the practice part
            </p>
            <p className=" max-w-[80%] ml-[8px] text-[#1536cf] cursor-pointer text-center">
              <Link to="/tarabol-app-front-end-web/detaildeck">
                {"<"}- Back to deck
              </Link>
            </p>
          </div>
        )
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
