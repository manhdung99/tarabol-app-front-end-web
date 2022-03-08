import React from "react";
import { Link } from "react-router-dom";
import elephant from "../image/elephant.svg";
import cap from "../image/cap.svg";
import User from "./User";
import Image from "../image/image.png";
import NavBar from "./NavBar";
export default function Header({ isSearch, isLogin }) {
  return (
    <div className="flex justify-between py-4 lg:max-w-[1200px] mx-auto">
      <div className="relative">
        <Link to="/tarabol-app-front-end-web/">
          <img
            src={elephant}
            alt="Logo"
            className="relative w-[102px] h-[60px] left-[25px] mt-[20px] mb-[8px] cursor-pointer"
          />
        </Link>
        <Link to="/tarabol-app-front-end-web/">
          <img
            src={cap}
            alt="Logo"
            className="absolute w-[45px] h-[38px] left-[64px] top-[4px] cursor-pointer"
          />
        </Link>
      </div>
      {isSearch && (
        <div className="flex items-center relative">
          <input
            type="text"
            className="bg-[#ABABAB] w-[343px] h-[49px] outline-0 px-[40px]"
          />
          <svg
            className="absolute left-[8px] "
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7949 3.07629C10.507 3.0763 8.31275 3.98517 6.69493 5.60297C5.07712 7.22078 4.16823 9.41499 4.16821 11.7029C4.16821 13.9909 5.07709 16.1851 6.69491 17.8029C8.31273 19.4207 10.507 20.3296 12.7949 20.3296C15.0828 20.3296 17.2771 19.4207 18.8949 17.8029C20.5127 16.1851 21.4216 13.9909 21.4216 11.7029C21.4216 9.41499 20.5127 7.22078 18.8949 5.60297C17.2771 3.98517 15.0828 3.0763 12.7949 3.07629ZM12.7949 4.57576C13.7506 4.57575 14.697 4.7601 15.58 5.11827C16.4629 5.47644 17.2652 6.00143 17.941 6.66324C18.6168 7.32506 19.1529 8.11075 19.5186 8.97546C19.8843 9.84017 20.0726 10.767 20.0726 11.7029C20.0726 12.6389 19.8843 13.5657 19.5186 14.4304C19.1529 15.2951 18.6168 16.0808 17.941 16.7426C17.2652 17.4044 16.4629 17.9294 15.58 18.2876C14.697 18.6457 13.7506 18.8301 12.7949 18.8301C10.8648 18.8301 9.01366 18.0792 7.64884 16.7426C6.28402 15.406 5.51728 13.5931 5.51728 11.7029C5.51728 9.81268 6.28402 7.99987 7.64884 6.66327C9.01366 5.32667 10.8648 4.57577 12.7949 4.57576Z"
              fill="#2B0000"
            />
            <path
              d="M23.0829 22.4939L19.1864 17.9767C18.5147 17.198 17.6951 16.9271 17.3556 17.3716C17.0162 17.8161 17.2856 18.8077 17.9572 19.5864L21.8537 24.1036C22.5254 24.8823 23.3451 25.1532 23.6845 24.7086C24.0239 24.2641 23.7546 23.2725 23.0829 22.4939Z"
              fill="#2B0000"
            />
          </svg>
        </div>
      )}
      <ul className="flex  font-bold text-[18px] items-center gap-[3rem]  ">
        <NavBar isLogin={isLogin} />
        {isLogin ? (
          <li>
            <User userName="DungNM25" src={Image} />
          </li>
        ) : (
          <>
            <li className="cursor-pointer ">
              <Link
                className="px-[12px] py-[6px] border-[1px] border-black rounded-[12px] "
                to="/tarabol-app-front-end-web/signup"
              >
                Sign up
              </Link>
            </li>
            <li className=" px-[12px] py-[6px] border-[1px] border-black rounded-[12px] ">
              <Link className=" " to="/tarabol-app-front-end-web/login">
                Sign in
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
