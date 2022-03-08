import React from "react";
import { Link } from "react-router-dom";

export default function UserMenuBar() {
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
  return (
    <div>
      <p className="font-bold text-[36px]">Search</p>
      <ul className="pb-[8px] relative after:w-[80%] after:h-[1px] after:bottom-[-8px] after:bg-black after:absolute">
        {searchItems.map((item) => (
          <li key={item.name} className="text-[18px] my-2 hover:opacity-[0.8]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <p className="text-[24px] font-bold pt-[24px]">Topic</p>
      <ul className=" pb-[8px] relative  ">
        {topicItems.map((item) => (
          <li key={item.name} className="text-[18px] my-2 hover:opacity-[0.8]">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
