import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className=" w-[75%] rounded-md pl-[8px] pt-4">
      <ul className="text-[24px] flex sm:flex-row sm:mb-5 sm:gap-x-[12px] md:gap-x-0 md:mb-0 md:flex-col gap-y-[10px]">
        <li>
          <Link to="/tarabol-app-front-end-web/learn">
            <span className="relative after:bg-[#000] after:absolute after:bottom-[-4px] after:h-[2px] after:w-[100%] after:left-0">
              Study
            </span>
          </Link>
        </li>
        <li>
          <Link to="/tarabol-app-front-end-web/practice">
            <span className="">Practice</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
