import React from "react";
import { Link } from "react-router-dom";
import Deck from "../deck";
import Trending from "./Trending";
// import ImgDescription from "../image/study-background.png";
import { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
function New({ newsDeck, setNewDeck }) {
  // useEffect(() => {
  //   const newItems = [
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a1",
  //       title: "Deck title",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a2",
  //       title: "Deck title",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a3",
  //       title: "Deck title",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.8,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       date_last_updated: "2022-02-02",
  //     },
  //   ];
  //   setNewDeck(newItems);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
        setNewDeck(items);
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
    <div className="bg-[#fff] pt-[3rem] ">
      <p className="font-[600] text-xl">What's New</p>
      <div className="flex flex-wrap justify-center md:gap-x-[144px] lg:gap-x-[38px] xl:gap-x-[138px]">
        {newsDeck.length > 0 &&
          newsDeck.map((item) => (
            <Link className="md:mb-8" to="/" key={item.id}>
              <Deck
                title={item.title}
                level={item.level}
                num_chapters={item.num_chapters}
                num_cards={item.num_cards}
                rating={item.rating}
                yellow_stars={4}
                gray_stars={1}
                reviewers={item.reviewers}
                author={item.author}
                image={item.image}
                price={item.price}
              />
            </Link>
          ))}
      </div>
      <Trending />
      <button className="border-[1px] border-black px-[1rem] py-[4px] rounded-[4px] ml-[50%] translate-x-[-50%] mt-[2rem]">
        Join with us
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newsDeck: state.deckReducer.newsDeck,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNewDeck: (value) => dispatch({ type: "SET_NEWS_DECK", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(New);
