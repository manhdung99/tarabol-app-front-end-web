import React from "react";
import { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Body({ numCard, cards, setStatusCard }) {
  const questionRef = useRef();
  const answerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentCard, setCurrentCard] = useState({});
  let rot = 360;
  // Khi click card question
  const handleShowAnswer = () => {
    questionRef.current.style = "transform: rotateX(" + rot + "deg)";
    setTimeout(() => {
      questionRef.current.style.display = "none";
      answerRef.current.style.display = "block";
    }, 500);
  };
  //Khi click card answer
  const handleShowQuestion = () => {
    answerRef.current.style.display = "block";
    answerRef.current.style = "transform: rotateX(" + rot + "deg)";
    rot += 360;
    setTimeout(() => {
      questionRef.current.style.display = "block";
      answerRef.current.style.display = "none";
    }, 500);
  };
  // Set curent Card
  useEffect(() => {
    const data = cards[currentIndex];
    setCurrentCard(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);
  //When click button
  const handleSetStatus = (status) => {
    let newCards = [...cards];
    let data = { ...currentCard, status: true, level: status };
    let objIndex = newCards.findIndex((obj) => obj.id === data.id);
    newCards[objIndex] = data;
    setStatusCard(newCards);
    setCurrentIndex((item) => item + 1);
  };
  return (
    <>
      {currentIndex < cards.length ? (
        <div className="sm:w-full md:max-w-[87.5%]">
          <div
            onClick={() => handleShowAnswer()}
            ref={questionRef}
            className="  h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
          >
            <p className=" text-center max-w-[70%] text-[24px] mx-auto mt-[48px]">
              {currentCard?.question}
            </p>
            <p className="text-center text-[red]">Question</p>
          </div>

          <div
            style={{ display: "none" }}
            onClick={() => handleShowQuestion()}
            ref={answerRef}
            className=" h-[340px] rounded-[8px] border-[1px] border-black cursor-pointer transition duration-1000 ease-in-out "
          >
            <p className=" text-center max-w-[70%] text-[24px] mx-auto mt-[48px]">
              {currentCard?.answer}
            </p>
            <p className="text-center text-[red]">Answer</p>
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
        <div>
          <p className="text-center text-[24px]">You have finished chapter</p>
          <div className="flex items-center justify-center">
            <span
              onClick={() => setCurrentIndex(0)}
              className="ml-[8px] text-[#1536cf] cursor-pointer"
            >
              {"<"}- Study Again
            </span>
            <span className="ml-[8px] text-[red]">
              <Link to="/tarabol-app-front-end-web/practice">
                Practice -{">"}
              </Link>
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
