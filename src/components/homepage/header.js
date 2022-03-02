import React from "react";
import { Link } from "react-router-dom";
import elephant from "../image/elephant.svg";
import cap from "../image/cap.svg";
export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="">
        <img
          src={elephant}
          alt="Logo"
          className="relative w-[102px] h-[60px] left-[25px] mt-[20px] mb-[8px]"
        />
        <img
          src={cap}
          alt="Logo"
          className="absolute w-[45px] h-[38px] left-[64px] top-[4px]"
        />
      </div>
      <div className="flex flex-1 justify-center">
        <p>Header Item</p>
      </div>
      <ul className="flex  font-bold text-xl  ">
        <li className=" cursor-pointer">
          <Link
            className=" h-full px-[24px] items-center flex"
            to="/tarabol-app-front-end-web/login"
          >
            Login
          </Link>
        </li>
        <li className=" bg-[#ffca28] cursor-pointer ">
          <Link
            className=" h-full px-[20px] items-center flex"
            to="/tarabol-app-front-end-web/signup"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
}
