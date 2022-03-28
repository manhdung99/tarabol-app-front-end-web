import React from "react";
import { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Body({ numCard, cards, setStatusCard }) {
  // const questionRef = useRef();
  // const answerRef = useRef();
  const cardRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState({});
  // const [rot, setRot] = useState(0);
  // Khi click card question
  const handleShowAnswer = () => {
    // let newRot = rot + 360;
    // setRot(newRot);
    // questionRef.current.style = "transform: rotateX(" + newRot + "deg)";
    // setTimeout(() => {
    //   questionRef.current.style.display = "none";
    //   answerRef.current.style.display = "block";
    // }, 500);

    cardRef.current.style = "transform: rotateY(180deg)";
  };
  //Khi click card answer
  const handleShowQuestion = () => {
    // answerRef.current.style = "transform: rotateX(" + rot + "deg)";
    // setTimeout(() => {
    //   questionRef.current.style.display = "block";
    //   answerRef.current.style.display = "none";
    // }, 500);
    cardRef.current.style = "transform: rotateY(0deg)";
  };
  // Set curent Card
  useEffect(() => {
    const data = cards[currentIndex];
    setCurrentCard(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  //When click button
  const handleSetStatus = (level) => {
    let newCards = [...cards];
    let data = { ...currentCard, status: true, level: level };
    let objIndex = newCards.findIndex((obj) => obj.id === data.id);
    newCards[objIndex] = data;
    setStatusCard(newCards);
    // setCurrentIndex((item) => item + 1);
    // if (questionRef.current.style.display === "none") {
    //   questionRef.current.style.display = "block";
    // }
    // setRot(0);
    // questionRef.current.style = "transform: rotateX(" + 0 + "deg)";
    // answerRef.current.style = "transform: rotateX(" + 0 + "deg)";
    setCurrentCard(data);
  };
  const handleSubmitAnswer = (status) => {
    let newCards = [...cards];
    let data = { ...currentCard, status: status };
    let objIndex = newCards.findIndex((obj) => obj.id === data.id);
    newCards[objIndex] = data;
    setStatusCard(newCards);
    if (status) {
      setCurrentIndex((item) => item + 1);
    } else {
      setCurrentCard(data);
    }
  };
  return (
    <>
      {currentIndex < cards.length ? (
        currentCard.status === false ? (
          <div className="  sm:w-full md:max-w-[87.5%] ">
            <div
              ref={cardRef}
              className="relative h-[320px] w-full preserve-3d duration-1000"
            >
              <div
                onClick={() => handleShowAnswer()}
                // ref={questionRef}
                className="absolute backface-hidden  w-full h-full rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
              >
                <p className=" text-center max-w-[70%] text-[24px] mx-auto mt-[48px]">
                  {currentCard?.question}
                </p>
                <p className="text-center text-[red]">Question</p>
              </div>

              <div
                // style={{ display: "none" }}
                onClick={() => handleShowQuestion()}
                // ref={answerRef}
                className=" preserve-3d absolute backface-hidden w-full h-full my-rotate-y-180 rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
              >
                <p className=" text-center max-w-[70%] text-[24px] mx-auto mt-[48px]">
                  {currentCard?.answer}
                </p>
                <p className="text-center text-[red]">Answer</p>
              </div>
            </div>
            <p className="text-center text-[red] text-[36px] my-[16px]">
              <span>{currentCard?.id}</span>/<span>{numCard}</span>
            </p>
            <div className="flex justify-between">
              <div
                onClick={() => handleSetStatus("easy")}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Easy
              </div>
              <div
                onClick={() => handleSetStatus("medium")}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Medium
              </div>
              <div
                onClick={() => handleSetStatus("hard")}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Hard
              </div>
              <div
                onClick={() => handleSetStatus("very hard")}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Very Hard
              </div>
            </div>
          </div>
        ) : (
          <div className="sm:w-full md:max-w-[87.5%]">
            <div className=" h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer flex items-center">
              <p className="max-w-[70%] text-[24px] mx-auto mt-[48px] text-center flex items-center text-[red]">
                {currentCard.practice_question}
              </p>
            </div>
            <p className="text-center text-[red] text-[36px] my-[16px]">
              <span>{currentCard?.id}</span>/<span>{numCard}</span>
            </p>
            <div className="flex justify-between">
              <div
                onClick={() => handleSubmitAnswer(true)}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer A (true)
              </div>
              <div
                onClick={() => handleSubmitAnswer(false)}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer B (false)
              </div>
              <div
                onClick={() => handleSubmitAnswer(false)}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer C (false)
              </div>
              <div
                onClick={() => handleSubmitAnswer(false)}
                className="sm:w-[75px] sm:h-[30px] md:w-[100px] md:h-[65px] lg:w-[145px] lg:h-[85px] xl:w-[175px] xl:h-[105px] bg-[#C4C4C4] flex items-center justify-center cursor-pointer"
              >
                Answer D (false)
              </div>
            </div>
          </div>
        )
      ) : (
        <div>
          <p className="text-center text-[24px]">You have finished chapter</p>
          <div className="flex items-center justify-center">
            <span
              onClick={() => setCurrentIndex(0)}
              className="ml-[8px] text-[#1536cf] cursor-pointer"
            >
              {"<"}- Practice Again
            </span>
            <span className="ml-[8px] text-[red]">
              <Link to="/">Next Chapter -{">"}</Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setStatusCard: (value) =>
      dispatch({ type: "SET_STATUS_CARD", payload: value }),
  };
};

export default connect(null, mapDispatchToProps)(Body);
