import React from "react";
import Footer from "../footer";
import Header from "../header";
import Menu from "./menu";
import Body from "./body";
import { connect } from "react-redux";
function Practice({ cards, num_practice_card, practice_card }) {
  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className="sm:mt-[88px] md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <p className="mb-8 text-[36px] font-bold pt-[24px]">Variable</p>
        <div className="flex flex-wrap">
          <div className="sm:w-full md:w-[20%]">
            <Menu />
          </div>
          <div className="sm:w-full md:w-[80%]">
            <Body
              cards={cards}
              num_practice_card={num_practice_card}
              practice_card={practice_card}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state.deckReducer.chapterDetail);
  return {
    cards: state.deckReducer.chapterDetail.cards,
    num_practice_card: state.deckReducer.chapterDetail.num_practice_cards,
    practice_card: state.deckReducer.chapterDetail.practiceCards,
  };
};

export default connect(mapStateToProps, null)(Practice);
