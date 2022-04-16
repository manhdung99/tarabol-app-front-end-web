// import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setDeckDetail } from "../../store/action/deckAction";
function Menu({ id, setDeckDetail, userDecks }) {
  const numberLevel = [1, 2, 3, 4];
  const handleFilterChapters = (data) => {
    // const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      // try {
      //   const response = await axios.get(
      //     `https://622aaf4814ccb950d22288dd.mockapi.io/api/v1/users/1/decks/${id}`,
      //     {
      //       cancelToken: ourRequest.token, // <-- 2nd step
      //     }
      //   );
      //   const items = response && response.data ? response.data : {};

      const items = [...userDecks].find((item) => item.id === id);
      console.log(items);
      let newData;
      switch (data) {
        case "All":
          newData = [...items.chapter];
          break;
        case "Finished":
          newData = items.chapter.filter((item) => item.progress === 1);
          break;
        case 1:
          newData = items.chapter.filter((item) => item.level === 1);
          break;
        case 2:
          newData = items.chapter.filter((item) => item.level === 2);
          break;
        case 3:
          newData = items.chapter.filter((item) => item.level === 3);
          break;
        case 4:
          newData = items.chapter.filter((item) => item.level === 4);
          break;
        default:
      }
      const newItem = { ...items, chapter: newData };
      setDeckDetail(newItem);
      // } catch (error) {
      //   if (axios.isCancel(error)) {
      //     console.log("Request Cancel :", error.message);
      //   }
      // }
    }
    fetchData();
  };

  return (
    <>
      <p className="font-bold lg:text-[32px] xl:text-[36px]">Search</p>
      <ul className="sm:flex sm:gap-x-[16px] md:block  ">
        <li
          onClick={() => handleFilterChapters("All")}
          className="lg:text-[16px] xl:text-[18px] hover:opacity-[0.8] cursor-pointer"
        >
          All
        </li>
        <li
          onClick={() => handleFilterChapters("Finished")}
          className="lg:text-[16px] xl:text-[18px] hover:opacity-[0.8] cursor-pointer"
        >
          Finished
        </li>
        <li className="lg:text-[16px] xl:text-[18px]">Level</li>
      </ul>
      <div className="flex flex-wrap ">
        {numberLevel.map((item) => (
          <button
            onClick={() => handleFilterChapters(item)}
            key={item}
            className="px-[17px] py-[2px] bg-[#DADADA] border-[1px] border-black mr-4 mb-3 font-bold text-[18px]"
            to="/"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    deckDetail: state.deckReducer.deckDetail,
    userDecks: state.deckReducer.userDecks,
  };
};

const mapDispatchToProps = {
  setDeckDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
