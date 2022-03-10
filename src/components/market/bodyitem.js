import React, { useEffect } from "react";
import ImgDescription from "../image/study-background.png";
import { Link } from "react-router-dom";
import Deck from "../deck";
import { connect } from "react-redux";

function BodyItem({ marketItems, setMarketItems }) {
  useEffect(() => {
    const marketItems = [
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a1",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 1,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a2",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 0,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a3",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.8,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 10,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a4",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 0,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a5",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 0,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a6",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.8,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 2,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a7",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 3,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a8",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.6,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 2,
        date_last_updated: "2022-02-02",
      },
      {
        id: "4adb602a-3b12-4b0e-9c10-57a50b4894a9",
        title: "Deck title",
        level: "Beginner",
        num_chapters: 120,
        num_cards: 1000,
        rating: 4.8,
        reviewers: 10,
        author: "Author name",
        image: ImgDescription,
        price: 5,
        date_last_updated: "2022-02-02",
      },
    ];
    setMarketItems(marketItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Link className="scale-[0.8]" to="/" key={index}>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyItem);
