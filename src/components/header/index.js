import React, { useState } from "react";
import { Link } from "react-router-dom";
import elephant from "../image/elephant.svg";
import cap from "../image/cap.svg";
import User from "./User";
import Image from "../image/image.png";
import NavBar from "./NavBar";
import { connect } from "react-redux";
function Header({ isSearch, isLogin }) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="relative mb-2">
      <div className=" sm:fixed sm:top-0  md:relative sm:h-[88px] sm:bg-[#fff] sm:z-10  flex justify-between  md:py-2 lg:py-4 sm:w-[100%] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto">
        <div className="absolute top-[50%] translate-y-[-50%] left-[16px] ">
          {isShowMenu ? (
            <svg
              onClick={() => setIsShowMenu(false)}
              width="24"
              height="24"
              viewBox="0 0 671 671"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7383 18.7383C30.7401 6.74018 47.0158 0 63.9863 0C80.9568 0 97.2326 6.74018 109.234 18.7383L335.538 245.042L561.842 18.7383C573.913 7.08021 590.079 0.629373 606.86 0.775192C623.641 0.921011 639.693 7.65182 651.559 19.5179C663.425 31.3841 670.156 47.4361 670.301 64.2167C670.447 80.9973 663.996 97.1638 652.338 109.234L426.034 335.538L652.338 561.842C663.996 573.913 670.447 590.079 670.301 606.86C670.156 623.641 663.425 639.693 651.559 651.559C639.693 663.425 623.641 670.156 606.86 670.301C590.079 670.447 573.913 663.996 561.842 652.338L335.538 426.034L109.234 652.338C97.1638 663.996 80.9973 670.447 64.2167 670.301C47.4361 670.156 31.3841 663.425 19.5179 651.559C7.65182 639.693 0.921011 623.641 0.775192 606.86C0.629373 590.079 7.08021 573.913 18.7383 561.842L245.042 335.538L18.7383 109.234C6.74018 97.2326 0 80.9568 0 63.9863C0 47.0158 6.74018 30.7401 18.7383 18.7383V18.7383Z"
                fill="#B7BFC6"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setIsShowMenu(true)}
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#B7BFC6"
                fillRule="evenodd"
                stroke="none"
                strokeWidth="1"
                id="Icon/small/hamburger"
                d="M5 13a1 1 0 010-2h14a1 1 0 010 2H5zm0 4a1 1 0 010-2h14a1 1 0 010 2H5zm0-8a1 1 0 110-2h14a1 1 0 010 2H5z"
              ></path>
            </svg>
          )}
        </div>
        {isShowMenu && (
          <div className=" top-[88px] fixed bg-[#00000040] w-full h-full left-0 z-10 transition duration-500 ease-in-out">
            <div className=" absolute w-[70%] h-full ">
              <ul className="w-full h-full bg-[#fff]  ">
                <li className="px-[40px] py-[15px] border-[1px] border-[#ebebef] bg-[#f4f4f7] ">
                  <Link to="/tarabol-app-front-end-web/signup">Sign up</Link>
                </li>
                <li className="px-[40px] py-[15px] border-[1px] border-[#ebebef] bg-[#f4f4f7]">
                  <Link to="/tarabol-app-front-end-web/marketplace">
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="relative sm:ml-[50%] sm:translate-x-[-50%] md:ml-[0] md:translate-x-[0]">
          <Link to="/tarabol-app-front-end-web/">
            <img
              src={elephant}
              alt="Logo"
              className="relative w-[102px] h-[60px] md:top-[10px] sm:top-[20px] ml-[-8px]  mb-[8px] cursor-pointer"
            />
          </Link>
          <Link to="/tarabol-app-front-end-web/">
            <img
              src={cap}
              alt="Logo"
              className="absolute w-[45px] h-[38px] sm:left-[24%] ssm:left-[28%]   md:left-[27px] sm:top-[4px] md:top-[-6px] cursor-pointer"
            />
          </Link>
        </div>
        {isSearch && (
          <div className=" sm:hidden md:flex  items-center relative ml-8">
            <input
              type="text"
              className=" bg-[#ABABAB] md:w-[240px] md:h-[40px] lg:w-[343px] lg:h-[49px] outline-0 px-[40px]"
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
        <ul className="flex  font-bold text-[18px] items-center md-gap-[1rem] lg:gap-[2rem] xl:gap-[3rem]  ">
          <NavBar isLogin={isLogin} />
          {isLogin ? (
            <li>
              <User userName="DungNM25" src={Image} />
            </li>
          ) : (
            <>
              <li className="cursor-pointer  mr-1">
                <Link
                  className="sm:hidden md:block  px-[12px] whitespace-nowrap py-[6px] border-[1px] border-black rounded-[12px] "
                  to="/tarabol-app-front-end-web/signup"
                >
                  Sign up
                </Link>
              </li>
              <li className=" sm:translate-x-[-12px] md:translate-x-[0] sm:text-[16px] md:text-[18px] px-[12px] whitespace-nowrap py-[6px] border-[1px] border-black rounded-[12px] ">
                <Link className=" " to="/tarabol-app-front-end-web/login">
                  Sign in
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.userReducer.isLogin,
  };
};

export default connect(mapStateToProps, null)(Header);
