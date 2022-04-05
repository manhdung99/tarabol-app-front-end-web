import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

const Menubar = ({
  setMarketItems,
  marketItems,
  isSortName,
  isSortPrice,
  setSortSelected,
}) => {
  const [priceValue, setPriceValue] = useState(0);
  const typingTimeoutRef = useRef(null);
  const searchItems = [
    { name: "Popular", link: "/tarabol-app-front-end-web/marketplace" },
    { name: "Latest", link: "/tarabol-app-front-end-web/marketplace" },
    { name: "Trending", link: "/tarabol-app-front-end-web/marketplace" },
  ];
  const topicItems = [
    { name: "Medical", link: "/tarabol-app-front-end-web/marketplace" },
    { name: "Historical", link: "/tarabol-app-front-end-web/marketplace" },
    { name: "Geography", link: "/tarabol-app-front-end-web/marketplace" },
    {
      name: "Information Technology",
      link: "/tarabol-app-front-end-web/marketplace",
    },
  ];

  const handleFilterDecks = (data) => {
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
        const newItems = items.filter(
          (item) => item.type.toLowerCase() === data.toLowerCase()
        );
        setMarketItems(newItems);
        setSortSelected("");
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancel :", error.message);
        }
      }
    }
    fetchData();
  };
  useEffect(() => {
    if (isSortPrice) {
      let newData = [...marketItems];
      newData = newData.sort((a, b) => a.price - b.price);
      setMarketItems(newData);
    }
    if (isSortName) {
      let newData = [...marketItems];
      newData = newData.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
      setMarketItems(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortName, isSortPrice]);
  const handleSortDecks = (data) => {
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
        let newData;
        switch (data) {
          case "Popular":
            newData = items.sort((a, b) => b.reviewers - a.reviewers);
            break;
          case "Latest":
            newData = items.sort(
              (a, b) =>
                Date.parse(b.date_last_updated) -
                Date.parse(a.date_last_updated)
            );
            break;
          case "Trending":
            newData = items.sort((a, b) => b.rating - a.rating);
            break;
          default:
        }
        setMarketItems(newData);
        setSortSelected("");
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancel :", error.message);
        }
      }
    }
    fetchData();
  };
  const handleFilterDeckWithPrice = (e) => {
    let data = e.target.value;
    setPriceValue(data);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    // run after 1s when change process input
    typingTimeoutRef.current = setTimeout(() => {
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
          let newData = items.filter((item) => item.price < data);
          setMarketItems(newData);
          setSortSelected("");
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log("Request Cancel :", error.message);
          }
        }
      }
      fetchData();
    }, 1000);
  };
  return (
    <div>
      <p className="font-bold  md:text-[28px] lg:text-[36px]">Search</p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute">
        {searchItems.map((item) => (
          <li
            onClick={() => handleSortDecks(item.name)}
            key={item.name}
            className="md:text-[12px] lg:text-[18px] my-2 cursor-pointer hover:opacity-80"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <p className=" md:text-[20px] lg:text-[24px] font-bold pt-[24px]">
        Topic
      </p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute ">
        {topicItems.map((item) => (
          <li
            onClick={() => handleFilterDecks(item.name)}
            key={item.name}
            className="md:text-[12px] lg:text-[18px] my-2 cursor-pointer hover:opacity-80"
          >
            {item.name}
          </li>
        ))}
      </ul>
      <p className=" pt-[24px] md:text-[20px] lg:text-[24px] font-bold">
        Price
      </p>
      <input
        value={priceValue}
        onChange={(e) => handleFilterDeckWithPrice(e)}
        className="h-[3px] w-[80%] cursor-pointer"
        type="range"
        step="1"
        min="0"
        max="150"
      />
      <div className="w-[80%] flex justify-between md:text-[16px] lg:text-[18px] ">
        <p>0$</p>
        {priceValue > 0 && <p>{priceValue}$</p>}
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);
