import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Deck from "../deck";
// import ImgDescription from "../image/study-background.png";
function Trending({ trendingDeck, setTrendingDeck, setDeckIntrodule }) {
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

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://622df7508d943bae348b25be.mockapi.io/api/v1/decks",
          {
            cancelToken: ourRequest.token, // <-- 2nd step
          }
        );
        const items = response && response.data ? response.data : [];
        console.log(items);
        setTrendingDeck(items);
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

  return (
    <div className="flex flex-col bg-[#fff] pt-[3rem] ">
      <p className="font-[600] text-xl">Trending</p>
      <div className="flex flex-wrap justify-center md:gap-x-[144px]  lg:gap-x-[38px] xl:gap-x-[138px] ">
        {trendingDeck.length > 0 &&
          trendingDeck.map((item, index) => (
            <Link
              onClick={setDeckIntrodule}
              className="md:mb-8"
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trendingDeck: state.deckReducer.trendingDeck,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTrendingDeck: (value) =>
      dispatch({ type: "SET_TRENDING_DECK", payload: value }),
    setDeckIntrodule: (value) =>
      dispatch({ type: "SET_INTRODULE_DECK", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
