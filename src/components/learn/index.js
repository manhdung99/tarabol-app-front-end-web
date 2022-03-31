import React from "react";
import Footer from "../footer";
import Header from "../header";
import Body from "./body";
import { connect } from "react-redux";
function Learn({ chapterDetail }) {
  console.log(chapterDetail);
  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className="sm:mt-[88px] md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <p className="mb-8 text-[36px] font-bold pt-[24px]">
          {chapterDetail.title}
        </p>
        <div className="flex flex-wrap">
          <div className="sm:w-full md:w-[20%]">{/* <Menu /> */}</div>
          <div className="sm:w-full md:w-[80%]">
            <Body
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
  };
};

export default connect(mapStateToProps, null)(Learn);
