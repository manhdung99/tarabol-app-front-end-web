import React, { useEffect, useState, useRef } from "react";
// import ImgDescription from "../image/study-background.png";
import { Link } from "react-router-dom";
import Deck from "../deck";
import { connect } from "react-redux";
import axios from "axios";

import {
  setMarketItems,
  setDeckIntrodule,
} from "../../store/action/deckAction";

function BodyItem({
  marketItems,
  setMarketItems,
  setDeckIntrodule,
  setIsSortName,
  setIsSortPrice,
  sortSelected,
  setSortSelected,
}) {
  const [isOpenSortOption, setIsOpenSortOption] = useState(false);
  const sortSpanRef = useRef();
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://622df7508d943bae348b25be.mockapi.io/api/v1/marketdecks",
          {
            cancelToken: ourRequest.token, // <-- 2nd step
          }
        );
        const items = response && response.data ? response.data : [];
        setMarketItems(items);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancel :", error.message);
        }
      }
    }
    fetchData();
    return () => {
      ourRequest.cancel("Cancel by user"); // <-- 3rd step
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //When click outside sort form
  useEffect(() => {
    document.addEventListener("click", handleCloseSortForm, true);
    return () => {
      document.removeEventListener("click", handleCloseSortForm, true);
    };
  });
  //Handle click outside sort form
  const handleCloseSortForm = (e) => {
    if (sortSpanRef.current && !sortSpanRef.current.contains(e.target)) {
      return setIsOpenSortOption(false);
    }
  };
  const handleSetIntroduleChapter = () => {
    const chapterItems = {
      title: "Iregular Verbs",
      num_chapters: 6,
      num_cards: 98,
      rating: 4.6,
      reviewers: 82,
      author: "tarabol",
      type: "english",
      level: "Beginner",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/40/07/flat-linear-study-backgrounds-vector-5144007.jpg",
      date_last_updated: "2022-03-02",
      price: 0,
      progress: 0,
      date_last_learned: "2022-03-02",
      card_evaluation: {
        hard: 10,
        medium: 10,
        easy: 10,
      },
      chapter: [
        {
          id: 31,
          title: "Variable",
          num_cards: 10,
          num_practice_cards: 10,
          progress: 0,
          deckId: 1,
          level: 1,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
        {
          id: 32,
          title: "Conditions",
          num_cards: 10,
          num_practice_cards: 10,
          progress: 0,
          level: 1,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
        {
          id: 33,
          title: "Object Oriented Programing",
          num_cards: 10,
          num_practice_cards: 10,
          level: 1,
          progress: 0,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
        {
          id: 34,
          title: "Data Structure",
          num_cards: 10,
          num_practice_cards: 10,
          progress: 0,
          deckId: 1,
          level: 1,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
        {
          id: 35,
          title: "Prototype",
          num_cards: 10,
          num_practice_cards: 10,
          progress: 0,
          level: 1,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
        {
          id: 36,
          title: "For Loop/While Loop",
          num_cards: 10,
          num_practice_cards: 10,
          level: 1,
          progress: 0,
          cards: [
            {
              id: 1,
              question: "Question 1",
              answer: "Answer 1",
              status: false,
              level: "",
              practice_question: "Practice 1",
              practice_answer: " ",
            },
            {
              id: 2,
              question: "Question 2",
              answer: "Answer 2",
              status: false,
              level: "",
              practice_question: "Practice 2",
              practice_answer: " ",
            },
            {
              id: 3,
              question: "Question 3",
              answer: "Answer 3",
              status: false,
              level: "",
              practice_question: "Practice 3",
              practice_answer: " ",
            },
            {
              id: 4,
              question: "Question 4",
              answer: "Answer 4",
              status: false,
              level: "",
              practice_question: "Practice 4",
              practice_answer: " ",
            },
            {
              id: 5,
              question: "Question 5",
              answer: "Answer 5",
              status: false,
              level: "",
              practice_question: "Practice 5",
              practice_answer: " ",
            },
            {
              id: 6,
              question: "Question 6",
              answer: "Answer 6",
              status: false,
              level: "",
              practice_question: "Practice 6",
              practice_answer: " ",
            },
            {
              id: 7,
              question: "Question 7",
              answer: "Answer 7",
              status: false,
              level: "",
              practice_question: "Practice 7",
              practice_answer: " ",
            },
            {
              id: 8,
              question: "Question 8",
              answer: "Answer 8",
              status: false,
              level: "",
              practice_question: "Practice 8",
              practice_answer: " ",
            },
            {
              id: 9,
              question: "Question 9",
              answer: "Answer 9",
              status: false,
              level: "",
              practice_question: "Practice 9",
              practice_answer: " ",
            },
            {
              id: 10,
              question: "Question 10",
              answer: "Answer 10",
              status: false,
              level: "",
              practice_question: "Practice 10",
              practice_answer: " ",
            },
          ],
          practiceCards: [
            {
              id: 1,
              question: "Practice 1",
              answer: "Answer 1",
              status: false,
            },
            {
              id: 2,
              question: "Practice 2",
              answer: "Answer 2",
              status: false,
            },
            {
              id: 3,
              question: "Practice 3",
              answer: "Answer 3",
              status: false,
            },
            {
              id: 4,
              question: "Practice 4",
              answer: "Answer 4",
              status: false,
            },
            {
              id: 5,
              question: "Practice 5",
              answer: "Answer 5",
              status: false,
            },
            {
              id: 6,
              question: "Practice 6",
              answer: "Answer 6",
              status: false,
            },
            {
              id: 7,
              question: "Practice 7",
              answer: "Answer 7",
              status: false,
            },
            {
              id: 8,
              question: "Practice 8",
              answer: "Answer 8",
              status: false,
            },
            {
              id: 9,
              question: "Practice 9",
              answer: "Answer 9",
              status: false,
            },
            {
              id: 10,
              question: "Practice 10",
              answer: "Answer 10",
              status: false,
            },
          ],
        },
      ],
      id: "10",
    };
    setDeckIntrodule(chapterItems);
  };
  const handleSortByName = (data) => {
    setSortSelected(data);
    setIsSortPrice(false);
    setIsSortName(true);
  };
  const handleSortByPrice = (data) => {
    setSortSelected(data);
    setIsSortName(false);
    setIsSortPrice(true);
  };
  return (
    <>
      <span
        ref={sortSpanRef}
        onClick={() => setIsOpenSortOption((item) => !item)}
        className="flex items-center absolute right-0 px-6  cursor-pointer border-[1px] rounded-[2px] mr-12"
      >
        <p className="font-bold text-[18px] ">
          {sortSelected !== "" ? sortSelected : "Sort by"}
        </p>
        <svg
          className="mt-[1px] ml-[4px]"
          width="12"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 7L7.70711 7.70711L7 8.41421L6.29289 7.70711L7 7ZM13.7071 1.70711L7.70711 7.70711L6.29289 6.29289L12.2929 0.292893L13.7071 1.70711ZM6.29289 7.70711L0.292893 1.70711L1.70711 0.292894L7.70711 6.29289L6.29289 7.70711Z"
            fill="#000"
          />
        </svg>
        {isOpenSortOption && (
          <div className="absolute bg-white w-[100%] top-[30px] left-0 border-[1px] rounded-[2px] shadow-md z-10">
            <ul>
              <li
                onClick={() => handleSortByName("Sort By Name")}
                className="py-1 text-center border-b-[1px] hover:bg-[#f8f9fa] cursor-pointer "
              >
                Sort by name
              </li>
              <li
                onClick={() => handleSortByPrice("Sort By Price")}
                className="py-1 text-center hover:bg-[#f8f9fa] cursor-pointer"
              >
                Sort by price
              </li>
            </ul>
          </div>
        )}
      </span>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3">
        {marketItems.length > 0 &&
          marketItems.map((item, index) => (
            <Link
              onClick={handleSetIntroduleChapter}
              className="scale-[0.8]"
              to="/tarabol-app-front-end-web/introduledeck"
              key={index}
            >
              <Deck
                title={item.title}
                level={item.level}
                num_chapters={item.num_chapters}
                num_cards={item.num_cards}
                rating={item.rating}
                yellow_stars={Math.floor(item.rating)}
                gray_stars={5 - Math.floor(item.rating)}
                reviewers={item.reviewers}
                author={item.author}
                image={item.image}
                price={item.price}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    marketItems: state.deckReducer.marketItems,
  };
};
const mapDispatchToProps = {
  setDeckIntrodule,
  setMarketItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyItem);
