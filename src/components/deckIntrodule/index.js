import React, { useEffect, useRef } from "react";
import Footer from "../footer";
import Header from "../header";
import Body from "./body";
import Menu from "./menu";
// import Image from "../image/study-background.png";
import { connect } from "react-redux";

function DeckIntrodule({ deckIntrodule }) {
  const ref = useRef();
  console.log(deckIntrodule);
  const yellowStars = new Array(
    Math.floor(deckIntrodule.rating ? deckIntrodule.rating : 0)
  )
    .fill(null)
    .map((_, i) => i);
  const grayStars = new Array(
    5 - Math.floor(deckIntrodule.rating ? deckIntrodule.rating : 0)
  )
    .fill(null)
    .map((_, i) => i);

  useEffect(() => {
    ref.current.style.background = "url(" + deckIntrodule.image + ")";
    ref.current.style.backgroundSize = "cover";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header isLogin={true} isSearch={true} />
      <div className=" flex justify-between sm:mt-[88px] md:mt-6 lg:mt-8 sm:max-w-[95%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <div className="w-[60%]">
          <p className="md:text-[28px] lg:text-[36px] font-bold ">
            {deckIntrodule.title}
          </p>
          <p className="my-4">{deckIntrodule.description}</p>
          <div className="flex items-center">
            <p className="md:text-[12px] lg:text-[16px] mr-[20px]">
              {deckIntrodule.level}
            </p>
            <p className="md:text-[12px] lg:text-[16px] mr-[20px]">
              {deckIntrodule.num_chapters} Chapters
            </p>
            <p className="md:text-[12px] lg:text-[16px] mr-[20px]">
              {deckIntrodule.num_cards}+ Cards
            </p>
            <div className="flex items-center">
              {yellowStars.map((item) => (
                <svg
                  className="md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px]"
                  key={item}
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
                  className="md:w-[18px] md:h-[18px] lg:w-[24px] lg:h-[24px]"
                  key={item}
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
              <p className=" md:text-[12px] lg:text-[14px] text-left ml-[2px] font-semibold ">
                4.6 (10+)
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-16">
            <div className="sm:w-full">
              <Body
                chapters={deckIntrodule?.chapters ? deckIntrodule.chapters : []}
              />
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div
            ref={ref}
            className="  lg:w-[300px]  xl:w-[354px] relative shadow-md shadow-[#00000040] rounded-[12px] pt-[43%] mt-[1rem]"
          >
            <div className="bg-[#fff] px-[8px] border-[1px] border-black rounded-b-[8px] border-t-0">
              <div className="flex items-center justify-between pb-[24px] pt-[12px] ">
                <div>
                  {deckIntrodule.price !== undefined ? (
                    deckIntrodule.price > 0 ? (
                      <p className="text-right font-bold mb-1">
                        {deckIntrodule.price}$
                      </p>
                    ) : (
                      <p className="text-right font-bold text-[20px] mb-1">
                        Free
                      </p>
                    )
                  ) : null}
                </div>
                <div className="flex items-center">
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2.66663C14.6815 2.66663 13.3925 3.05762 12.2962 3.79016C11.1999 4.5227 10.3454 5.5639 9.8408 6.78207C9.33622 8.00024 9.2042 9.34069 9.46143 10.6339C9.71867 11.9271 10.3536 13.115 11.286 14.0473C12.2183 14.9797 13.4062 15.6146 14.6994 15.8719C15.9926 16.1291 17.333 15.9971 18.5512 15.4925C19.7694 14.9879 20.8106 14.1334 21.5431 13.0371C22.2757 11.9408 22.6667 10.6518 22.6667 9.33329C22.6667 7.56518 21.9643 5.86949 20.714 4.61925C19.4638 3.369 17.7681 2.66663 16 2.66663V2.66663ZM16 13.3333C15.2089 13.3333 14.4355 13.0987 13.7777 12.6592C13.1199 12.2196 12.6072 11.5949 12.3045 10.864C12.0017 10.1331 11.9225 9.32886 12.0769 8.55293C12.2312 7.77701 12.6122 7.06428 13.1716 6.50487C13.731 5.94546 14.4437 5.56449 15.2196 5.41015C15.9956 5.25581 16.7998 5.33502 17.5307 5.63777C18.2616 5.94053 18.8864 6.45321 19.3259 7.11101C19.7654 7.76881 20 8.54217 20 9.33329C20 10.3942 19.5786 11.4116 18.8284 12.1617C18.0783 12.9119 17.0609 13.3333 16 13.3333V13.3333ZM28 28V26.6666C28 24.1913 27.0167 21.8173 25.2663 20.067C23.516 18.3166 21.142 17.3333 18.6667 17.3333H13.3333C10.858 17.3333 8.48401 18.3166 6.73367 20.067C4.98333 21.8173 4 24.1913 4 26.6666V28H6.66667V26.6666C6.66667 24.8985 7.36905 23.2028 8.61929 21.9526C9.86953 20.7023 11.5652 20 13.3333 20H18.6667C20.4348 20 22.1305 20.7023 23.3807 21.9526C24.631 23.2028 25.3333 24.8985 25.3333 26.6666V28H28Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <p className="ml-[4px]">30 Learned</p>
                </div>
              </div>
              <div className="my-8 flex items-center justify-center">
                <button className="bg-[#0079bf] hover:bg-[#026aa7] text-white text-[16px] py-[5px] px-[30px] rounded-[2px] ">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    deckIntrodule: state.deckReducer.deckIntrodule,
  };
};

export default connect(mapStateToProps, null)(DeckIntrodule);
