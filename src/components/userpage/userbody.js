import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DeckCard from "../userdeck";
import { connect } from "react-redux";
// import { initData } from "../../initData/initData";
// import axios from "axios";
import { setUserDeck, setDeckDetail } from "../../store/action/deckAction";
function UserBody({
  userDecks,
  setUserDeck,
  setDeckDetail,
  sortSelected,
  setSortSelected,
  isSortName,
  setIsSortName,
  isSortProcess,
  setIsSortProcess,
}) {
  const sortSpanRef = useRef(null);
  console.log(userDecks);
  const [isOpenSortOption, setIsOpenSortOption] = useState(false);

  // useEffect(() => {
  // const ourRequest = axios.CancelToken.source();
  // async function fetchData() {
  // try {
  //   const response = await axios.get(
  //     "https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1",
  //     {
  //       cancelToken: ourRequest.token, // <-- 2nd step
  //     }
  //   );
  //   const items = response && response.data ? response.data : [];
  //   setUserDeck(items.deck);
  // } catch (error) {
  //   if (axios.isCancel(error)) {
  //     console.log("Request Cancel :", error.message);
  //   }
  // }
  // const items = initData.filter((item) => item.userId === "1");
  // setUserDeck(items);
  // }
  // fetchData();
  // return () => {
  // ourRequest.cancel("Cancel by user"); // <-- 3rd step
  // };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (isSortProcess) {
      let newData = [...userDecks];
      newData = newData.sort((a, b) => b.progress - a.progress);
      setUserDeck(newData);
    }
    if (isSortName) {
      let newData = [...userDecks];
      newData = newData.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      setUserDeck(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortName, isSortProcess]);

  const handleSetDetailDeck = (id) => {
    // const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      // try {
      //   const response = await axios.get(
      //     `https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1/decks/${id}`,
      //     {
      //       cancelToken: ourRequest.token, // <-- 2nd step
      //     }
      //   );
      //   const item = response && response.data ? response.data : [];
      //   setDeckDetail(item);
      // } catch (error) {
      //   if (axios.isCancel(error)) {
      //     console.log("Request Cancel :", error.message);
      //   }
      // }
      const items = [...userDecks];
      const deckItems = items.find((item) => item.id === id);
      setDeckDetail(deckItems);
    }
    fetchData();
  };

  const handleSortByName = (data) => {
    setIsSortName(true);
    setIsSortProcess(false);
    setSortSelected(data);
  };
  const handleSortByProcess = (data) => {
    setIsSortName(false);
    setIsSortProcess(true);
    setSortSelected(data);
  };
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
  return (
    <>
      <span
        ref={sortSpanRef}
        onClick={() => setIsOpenSortOption((item) => !item)}
        className="flex items-center absolute right-0 px-6  cursor-pointer border-[1px] rounded-[2px] "
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
                onClick={() => handleSortByProcess("Sort By Process")}
                className="py-1 text-center hover:bg-[#f8f9fa] cursor-pointer"
              >
                Sort by process
              </li>
            </ul>
          </div>
        )}
      </span>
      <div className="flex sm:justify-center md:justify-between mt-16  flex-wrap">
        {userDecks.length > 0 &&
          userDecks.map((item) => (
            <Link
              className=""
              to="/tarabol-app-front-end-web/detaildeck"
              key={item.id}
              onClick={() => handleSetDetailDeck(item.id)}
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
const mapDispatchToProps = {
  setDeckDetail,
  setUserDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBody);
