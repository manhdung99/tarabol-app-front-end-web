import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="bg-[#ABABAB] w-[75%] rounded-md h-[300px] pl-[8px] pt-4">
      <ul className="text-[24px] flex flex-col gap-y-[10px]">
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
