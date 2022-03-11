import React from "react";
import { Link } from "react-router-dom";

export default function Menubar() {
  const searchItems = [
    { name: "Popular", link: "/" },
    { name: "Latest", link: "/" },
    { name: "Trending", link: "/" },
  ];
  const topicItems = [
    { name: "Medical", link: "/" },
    { name: "Historical", link: "/" },
    { name: "Geography", link: "/" },
    { name: "Information Technology", link: "/" },
  ];
  return (
    <div>
      <p className="font-bold  md:text-[28px] lg:text-[36px]">Search</p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute">
        {searchItems.map((item) => (
          <li key={item.name} className="md:text-[12px] lg:text-[18px] my-2">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className=" md:text-[20px] lg:text-[24px] font-bold pt-[24px]">
        Topic
      </p>
      <ul className="flex flex-wrap sm:flex-row md:flex-col sm:gap-x-[24px] md:gap-x-0 pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute ">
        {topicItems.map((item) => (
          <li key={item.name} className="md:text-[12px] lg:text-[18px] my-2">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className=" pt-[24px] md:text-[20px] lg:text-[24px] font-bold">
        Price
      </p>
      <input
        className="h-[3px] w-[80%]  "
        type="range"
        step="1"
        min="0"
        max="100"
      />
      <div className="w-[80%] flex justify-between md:text-[16px] lg:text-[18px]">
        <p>0$</p>
        <p>150$</p>
      </div>
    </div>
  );
}
