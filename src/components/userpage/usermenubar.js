// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { initData } from "../../initData/initData";
import { setUserDeck } from "../../store/action/deckAction";
function UserMenuBar({ setUserDeck, setSortSelected }) {
  const searchItems = [
    { name: "All", link: "/" },
    { name: "Recently learn", link: "/" },
    { name: "Finished", link: "/" },
  ];
  const topicItems = [
    { name: "Medical", link: "/" },
    { name: "Historical", link: "/" },
    { name: "Geography", link: "/" },
    { name: "Information Technology", link: "/" },
  ];

  const handleFilterDecks = (data) => {
    // const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      // try {
      //   const response = await axios.get(
      //     "https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1/decks",
      //     {
      //       cancelToken: ourRequest.token, // <-- 2nd step
      //     }
      //   );
      //   const items = response && response.data ? response.data : [];
      //   let newData;
      //   switch (data) {
      //     case "All":
      //       newData = [...items];
      //       break;
      //     case "Recently learn":
      //       newData = items.filter((item) => item.progress < 1);
      //       break;
      //     case "Finished":
      //       newData = items.filter((item) => item.progress === 1);
      //       break;
      //     default:
      //   }
      //   setUserDeck(newData);
      //   setSortSelected("");
      // } catch (error) {
      //   if (axios.isCancel(error)) {
      //     console.log("Request Cancel :", error.message);
      //   }
      // }
      const items = initData.filter((item) => item.userId === "1");
      let newData;
      switch (data) {
        case "All":
          newData = [...items];
          break;
        case "Recently learn":
          newData = items.filter((item) => item.progress < 1);
          break;
        case "Finished":
          newData = items.filter((item) => item.progress === 1);
          break;
        default:
      }
      setUserDeck(newData);
      setSortSelected("");
    }
    fetchData();
  };

  const handleFilterDecksWithCategory = (data) => {
    // const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      // try {
      //   const response = await axios.get(
      //     "https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1/decks",
      //     {
      //       cancelToken: ourRequest.token, // <-- 2nd step
      //     }
      //   );
      //   const items = response && response.data ? response.data : [];
      //   const newItems = items.filter(
      //     (item) => item.type.toLowerCase() === data.toLowerCase()
      //   );
      //   setUserDeck(newItems);
      //   setSortSelected("");
      // } catch (error) {
      //   if (axios.isCancel(error)) {
      //     console.log("Request Cancel :", error.message);
      //   }
      // }
      const items = initData.filter((item) => item.userId === "1");
      const newItems = items.filter(
        (item) => item.type.toLowerCase() === data.toLowerCase()
      );
      setUserDeck(newItems);
      setSortSelected("");
    }
    fetchData();
  };
  return (
    <div>
      <p className="font-bold md:text-[28px] lg:text-[36px]">Search</p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute">
        {searchItems.map((item) => (
          <li
            onClick={() => handleFilterDecks(item.name)}
            key={item.name}
            className="md:text-[12px] lg:text-[18px] my-2 hover:opacity-[0.8] cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <p className="text-[24px] font-bold pt-[24px]">Topic</p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative  ">
        {topicItems.map((item) => (
          <li
            onClick={() => handleFilterDecksWithCategory(item.name)}
            key={item.name}
            className="md:text-[12px] lg:text-[18px] my-2 hover:opacity-[0.8] cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userDecks: state.deckReducer.userDecks,
  };
};
const mapDispatchToProps = {
  setUserDeck,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenuBar);
