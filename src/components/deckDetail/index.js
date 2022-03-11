import React, { useEffect } from "react";
import Footer from "../footer";
import Header from "../header";
import Body from "./body";
import Menu from "./menu";
import Image from "../image/study-background.png";
import { connect } from "react-redux";

function DeckDetail({ deckDetail, setDeckDetail }) {
  useEffect(() => {
    const deckDetail = {
      title: "Title Deck",
      rating: 4.6,
      reviewers: 10,
      progress: 0.5,
      learn_time: 150,
      card_evaluation: {
        hard: 150,
        medium: 0,
        easy: 10,
      },
      chapters: [
        {
          id: "chapter 1",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
        {
          id: "chapter 2",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
        {
          id: "chapter 3",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
        {
          id: "chapter 4",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
        {
          id: "chapter 5",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
        {
          id: "chapter 6",
          title: "Chapter title",
          level: 1,
          num_cards: 10,
          image: Image,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
        },
      ],
    };
    setDeckDetail(deckDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const yellowStars = new Array(
    Math.floor(deckDetail.rating ? deckDetail.rating : 0)
  )
    .fill(null)
    .map((_, i) => i);
  const grayStars = new Array(
    5 - Math.floor(deckDetail.rating ? deckDetail.rating : 0)
  )
    .fill(null)
    .map((_, i) => i);

  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className="md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <p className="md:text-[28px] lg:text-[36px] font-bold">
          {deckDetail.title}
        </p>
        <div className="flex">
          {yellowStars.map((item) => (
            <svg
              key={item}
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0252 4.69786C11.0739 2.23262 11.5983 1 12.5 1C13.4017 1 13.9261 2.23262 14.9748 4.69787L15.0236 4.81266C15.6161 6.2054 15.9124 6.90177 16.5161 7.32503C17.1199 7.7483 17.9124 7.81523 19.4976 7.94908L19.7841 7.97328C22.3784 8.19235 23.6755 8.30189 23.953 9.08004C24.2306 9.85818 23.2673 10.6846 21.3407 12.3373L20.6977 12.8889C19.7224 13.7255 19.2348 14.1439 19.0075 14.6921C18.9651 14.7944 18.9299 14.8992 18.902 15.0058C18.7526 15.5774 18.8954 16.1842 19.181 17.398L19.2699 17.7758C19.7947 20.0063 20.0572 21.1216 19.599 21.6027C19.4277 21.7825 19.2052 21.9119 18.958 21.9755C18.2965 22.1457 17.3572 21.424 15.4787 19.9807C14.2453 19.033 13.6285 18.5591 12.9204 18.4525C12.6419 18.4106 12.3581 18.4106 12.0796 18.4525C11.3715 18.5591 10.7547 19.033 9.52126 19.9807C7.64278 21.424 6.70355 22.1457 6.04199 21.9755C5.79478 21.9119 5.57225 21.7825 5.40103 21.6027C4.94282 21.1216 5.20525 20.0063 5.73012 17.7758L5.81901 17.398C6.10461 16.1842 6.2474 15.5774 6.098 15.0058C6.07014 14.8992 6.03489 14.7944 5.99249 14.6921C5.76521 14.1439 5.27757 13.7255 4.3023 12.8889L3.6593 12.3373C1.7327 10.6846 0.769405 9.85818 1.04696 9.08004C1.32451 8.30189 2.62163 8.19235 5.21588 7.97328L5.50244 7.94908C7.08755 7.81523 7.88011 7.7483 8.48387 7.32503C9.08763 6.90177 9.38387 6.2054 9.97635 4.81266L10.0252 4.69786Z"
                fill="#FFD600"
                stroke="white"
                strokeWidth="1.4"
              />
            </svg>
          ))}
          {grayStars.map((item) => (
            <svg
              key={item}
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0252 4.69786C11.0739 2.23262 11.5983 1 12.5 1C13.4017 1 13.9261 2.23262 14.9748 4.69787L15.0236 4.81266C15.6161 6.2054 15.9124 6.90177 16.5161 7.32503C17.1199 7.7483 17.9124 7.81523 19.4976 7.94908L19.7841 7.97328C22.3784 8.19235 23.6755 8.30189 23.953 9.08004C24.2306 9.85818 23.2673 10.6846 21.3407 12.3373L20.6977 12.8889C19.7224 13.7255 19.2348 14.1439 19.0075 14.6921C18.9651 14.7944 18.9299 14.8992 18.902 15.0058C18.7526 15.5774 18.8954 16.1842 19.181 17.398L19.2699 17.7758C19.7947 20.0063 20.0572 21.1216 19.599 21.6027C19.4277 21.7825 19.2052 21.9119 18.958 21.9755C18.2965 22.1457 17.3572 21.424 15.4787 19.9807C14.2453 19.033 13.6285 18.5591 12.9204 18.4525C12.6419 18.4106 12.3581 18.4106 12.0796 18.4525C11.3715 18.5591 10.7547 19.033 9.52126 19.9807C7.64278 21.424 6.70355 22.1457 6.04199 21.9755C5.79478 21.9119 5.57225 21.7825 5.40103 21.6027C4.94282 21.1216 5.20525 20.0063 5.73012 17.7758L5.81901 17.398C6.10461 16.1842 6.2474 15.5774 6.098 15.0058C6.07014 14.8992 6.03489 14.7944 5.99249 14.6921C5.76521 14.1439 5.27757 13.7255 4.3023 12.8889L3.6593 12.3373C1.7327 10.6846 0.769405 9.85818 1.04696 9.08004C1.32451 8.30189 2.62163 8.19235 5.21588 7.97328L5.50244 7.94908C7.08755 7.81523 7.88011 7.7483 8.48387 7.32503C9.08763 6.90177 9.38387 6.2054 9.97635 4.81266L10.0252 4.69786Z"
                fill="#BBBBBB"
                stroke="white"
                strokeWidth="1.4"
              />
            </svg>
          ))}
          <p className="text-[14px] text-left ml-[2px] font-semibold pt-1">
            {deckDetail.rating} ({deckDetail.reviewers}+)
          </p>
        </div>
        <div className="flex sm:flex-wrap md:flex-nowrap py-8 gap-[2.5rem] justify-between">
          <div className="   w-[368px]  rounded-[10px] border-[1px] border-black  items-center px-[32px] flex justify-between">
            <div className="w-[60%] ">
              <p className=" md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold text-center">
                You almost finish the deck
              </p>
            </div>
            <div className="w-[30%]">
              <svg
                viewBox="0 0 36 36"
                className="block my-[10px] max-w-[100%] max-h-[100px]"
              >
                <path
                  stroke="#D3E1F3"
                  fill="none"
                  strokeWidth="3.5"
                  d="M18 2.0845 
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  strokeDasharray={
                    deckDetail?.progress ? deckDetail.progress * 100 : 0
                  }
                  stroke="#2F80ED"
                  fill="none"
                  strokeWidth="3"
                  d="M18 2.0845 
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                  fill="#333"
                  fontSize="8px"
                  textAnchor="middle"
                  x="18"
                  y="20.35"
                >
                  {deckDetail.progress * 100} %
                </text>
              </svg>
            </div>
          </div>
          <div className="   w-[368px]  rounded-[10px] border-[1px] border-black flex items-center ">
            <p className=" md:py-[24px] lg:py-[36px] xl:py-[50px]  lg:text-[20px] xl:text-[24px] font-bold text-center w-[65%] mx-auto">
              You have learned {deckDetail.learn_time} mins in this deck
            </p>
          </div>
          <div className="   w-[368px]  rounded-[10px] border-[1px] border-black flex flex-col justify-center">
            {deckDetail.card_evaluation?.hard > 0 && (
              <p className=" lg:text-[20px] xl:text-[24px] font-bold text-center">
                {deckDetail.card_evaluation.hard} Hard Cards
              </p>
            )}
            {deckDetail?.card_evaluation?.medium > 0 && (
              <p className="lg:text-[20px] xl:text-[24px] font-bold text-center">
                {deckDetail.card_evaluation.medium} Easy Cards
              </p>
            )}
            {deckDetail?.card_evaluation?.easy > 0 && (
              <p className="lg:text-[20px] xl:text-[24px] font-bold text-center">
                {deckDetail.card_evaluation.easy} Easy Cards
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className=" sm:w-full md:w-[20%]">
            <Menu />
          </div>
          <div className="sm:w-full md:w-[80%]">
            <Body chapters={deckDetail?.chapters ? deckDetail.chapters : []} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    deckDetail: state.deckReducer.deckDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDeckDetail: (value) =>
      dispatch({ type: "SET_DETAIL_DECK", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
