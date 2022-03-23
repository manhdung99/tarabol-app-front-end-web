import React, { useEffect } from "react";
// import ImgDescription from "../image/study-background.png";
import { Link } from "react-router-dom";
import Deck from "../deck";
import { connect } from "react-redux";
import axios from "axios";

function BodyItem({ marketItems, setMarketItems, setDeckIntrodule }) {
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

  const handleSetIntroduleChapter = () => {
    const chapterItems = {
      title: "Introduction to CS",
      num_chapters: 120,
      num_cards: 1000,
      rating: 4.6,
      reviewers: 82,
      author: "author 1",
      level: "Beginner",
      description: "Description of deck",
      image:
        "https://cdn3.vectorstock.com/i/1000x1000/40/07/flat-linear-study-backgrounds-vector-5144007.jpg",
      date_last_updated: "date_last_updated 1",
      price: 0,
      progress: 0,
      date_last_learned: 98,
      card_evaluation: {
        hard: 150,
        medium: 0,
        easy: 10,
      },
      chapters: [
        {
          title: "Variables",
          level: 1,
          num_cards: 10,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
          image:
            "https://cdn3.vectorstock.com/i/1000x1000/40/07/flat-linear-study-backgrounds-vector-5144007.jpg",
          id: "1",
          deckId: "1",
        },
        {
          title: "Conditions",
          level: 1,
          num_cards: 10,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
          image:
            "https://cdn3.vectorstock.com/i/1000x1000/40/07/flat-linear-study-backgrounds-vector-5144007.jpg",
          id: "2",
          deckId: "1",
        },
        {
          title: "Object Oriented Programing",
          level: 1,
          num_cards: 10,
          card_evaluation: {
            hard: 0,
            medium: 0,
            easy: 10,
          },
          image:
            "https://cdn3.vectorstock.com/i/1000x1000/40/07/flat-linear-study-backgrounds-vector-5144007.jpg",
          id: "3",
          deckId: "1",
        },
      ],
    };
    setDeckIntrodule(chapterItems);
  };

  return (
    <>
      <span className="flex items-center absolute right-8 ">
        <p className="font-bold text-[18px] ">Sort by</p>
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
const mapDispatchToProps = (dispatch) => {
  return {
    setMarketItems: (value) =>
      dispatch({ type: "SET_MARKET_ITEMS", payload: value }),
    setDeckIntrodule: (value) =>
      dispatch({ type: "SET_INTRODULE_DECK", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyItem);
