import React, { useEffect } from "react";
import ImgDescription from "../image/study-background.png";
import { Link } from "react-router-dom";
import DeckCard from "../userdeck";
import { connect } from "react-redux";
import axios from "axios";

function UserBody({ userDecks, setUserDeck, setDeckDetail }) {
  // useEffect(() => {
  //   const userItems = [
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a3",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.75,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a1",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.5,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a2",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.25,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a4",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.2,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a5",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.6,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a6",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.75,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a7",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.75,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a8",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.75,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //     {
  //       id: "4adb602a-3b12-4b0e-9c10-57a50b4894a9",
  //       title: "Deck title",
  //       description: "Description here",
  //       level: "Beginner",
  //       num_chapters: 120,
  //       num_cards: 1000,
  //       rating: 4.6,
  //       reviewers: 10,
  //       author: "Author name",
  //       image: ImgDescription,
  //       progress: 0.75,
  //       date_last_learned: "2022-02-02",
  //       date_last_updated: "2022-02-02",
  //     },
  //   ];

  //   setUserDeck(userItems);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1",
          {
            cancelToken: ourRequest.token, // <-- 2nd step
          }
        );
        const items = response && response.data ? response.data : [];
        setUserDeck(items.deck);
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
  // console.log(userDecks);
  const handleSetDetailDeck = (id) => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1/decks/${id}`,
          {
            cancelToken: ourRequest.token, // <-- 2nd step
          }
        );
        const item = response && response.data ? response.data : [];
        setDeckDetail(item);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancel :", error.message);
        }
      }
    }
    fetchData();
  };
  return (
    <>
      <span className="flex items-center absolute right-0 cursor-pointer ">
        <p className="font-bold text-[18px]  ">Sort by</p>
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
      <div className="flex sm:justify-center md:justify-between mt-16  flex-wrap">
        {userDecks.length > 0 &&
          userDecks.map((item) => (
            <Link
              className=""
              to="/tarabol-app-front-end-web/detaildeck"
              key={item.id}
              onClick={(e) => handleSetDetailDeck(item.id)}
            >
              <DeckCard
                title={item.title}
                description={item.description}
                level={item.level}
                num_chapters={item.num_chapters}
                num_cards={item.num_cards}
                rating={item.rating}
                yellow_star={Math.floor(item.rating)}
                gray_star={5 - Math.floor(item.rating)}
                reviewers={item.reviewers}
                author={item.author}
                image={item.image}
                progress={item.progress}
                date_last_learned={item.date_last_learned}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userDecks: state.deckReducer.userDecks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserDeck: (value) =>
      dispatch({ type: "SET_USER_DECKS", payload: value }),
    setDeckDetail: (value) =>
      dispatch({ type: "SET_DETAIL_DECK", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBody);
