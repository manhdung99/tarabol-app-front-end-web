import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const numberLevel = [1, 2, 3, 4];
  return (
    <>
      <p className="font-bold lg:text-[32px] xl:text-[36px]">Search</p>
      <ul className="flex gap-x-[16px]">
        <li>
          <Link
            className="lg:text-[16px] xl:text-[18px] hover:opacity-[0.8]"
            to="/"
          >
            All
          </Link>
        </li>
        <li>
          <Link
            className="lg:text-[16px] xl:text-[18px] hover:opacity-[0.8]"
            to="/"
          >
            Finished
          </Link>
        </li>
        <li>
          <Link
            className="lg:text-[16px] xl:text-[18px] hover:opacity-[0.8]"
            to="/"
          >
            Level
          </Link>
        </li>
      </ul>
      <div className="flex flex-wrap  md:justify-between">
        {numberLevel.map((item) => (
          <Link
            key={item}
            className="px-[17px] py-[2px] bg-[#DADADA] border-[1px] border-black mr-4 mb-3 font-bold text-[18px]"
            to="/"
          >
            {item}
          </Link>
        ))}
      </div>
    </>
  );
}
