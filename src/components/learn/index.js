import React, { useState } from "react";
import Footer from "../footer";
import Header from "../header";
import Body from "./body";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Learn({ chapterDetail, learnIndex, setLearnIndex }) {
  const [currentIndex, setCurrentIndex] = useState(learnIndex);
  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className="sm:mt-[88px] md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <p className="mb-0 text-[36px] font-bold">{chapterDetail.title}</p>
        <button
          onClick={() => setLearnIndex(currentIndex)}
          className="border-[1px] rounded-[2px] px-4 py-1 hover:text-[#1536cf] hover:border-[#1536cf]"
        >
          <Link to="/tarabol-app-front-end-web/detaildeck">
            {"<"}- Back to Deck
          </Link>
        </button>
        <div className="flex flex-wrap">
          <div className="sm:w-full md:w-[20%]">{/* <Menu /> */}</div>
          <div className="sm:w-full md:w-[80%]">
            <Body
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              numCard={chapterDetail.num_cards}
              cards={chapterDetail.cards}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    chapterDetail: state.deckReducer.chapterDetail,
    learnIndex: state.deckReducer.learningIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLearnIndex: (value) =>
      dispatch({ type: "SET_LEARNING_INDEX", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
