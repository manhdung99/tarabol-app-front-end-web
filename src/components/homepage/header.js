import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-1 justify-center">
        <p>Header Item</p>
      </div>
      <ul className="flex  font-bold text-xl ">
        <li className="px-[20px] py-[20px]">
          <Link to="/tarabol-app-front-end-web/login">Login</Link>
        </li>
        <li className="px-[20px] bg-[#ffca28] py-[20px]">
          <Link to="/">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
