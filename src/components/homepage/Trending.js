import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Deck from "../deck";
import ImgDescription from "../image/study-background.png";
function Trending({ trendingDeck, setTrendingDeck }) {
  // useEffect(() => {
  //   const trendingItems = [
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
  //   setTrendingDeck(trendingItems);
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
            <Link className="md:mb-8" to="/" key={index}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
