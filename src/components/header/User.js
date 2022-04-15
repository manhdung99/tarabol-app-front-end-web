import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function User({ setLoginStatus, userName, src }) {
  const userRef = useRef(null);
  const navigate = useNavigate();
  const [showUserItem, setShowUserItem] = useState(false);
  const handleLogout = () => {
    setLoginStatus(false);
    navigate("/tarabol-app-front-end-web/");
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseShowUserItemForm, true);
    return () => {
      document.removeEventListener("click", handleCloseShowUserItemForm, true);
    };
  });
  const handleCloseShowUserItemForm = (e) => {
    if (userRef.current && !userRef.current.contains(e.target)) {
      return setShowUserItem(false);
    }
  };
  const handleMoveToProfilePage = () => {
    navigate("/tarabol-app-front-end-web/profile");
  };

  return (
    <div
      ref={userRef}
      onClick={() => setShowUserItem(!showUserItem)}
      className="flex relative items-center mr-[1rem] cursor-pointer  "
    >
      <img className="w-[36px] h-[36px] rounded-[50%]" src={src} alt="Avatar" />
      <p className=" sm:hidden md:block ml-[0.5rem]">{userName}</p>
      {showUserItem && (
        <div className="absolute bg-[#fff] sm:left-[-60px] md:left-[-8px] sm:top-[46px] md:top-[40px] shadow-md shadow-[#0000040] border-[1px] rounded-[4px]  ">
          <ul className="after:absolute after:border-solid after:border-x-[15px] after:border-y-[10px] after:border-l-[transparent] after:border-r-[transparent] after:border-t-[transparent] after:border-b-[#ccc] after:top-[-20px] after:left-[60px] after:opacity-40 ">
            <li
              onClick={() => handleMoveToProfilePage()}
              className="sm:w-[100px] md:w-[150px]  py-[2px] text-center sm:text-lg md:text-xl hover:bg-[#f1f1f1] hover:text-indigo-500 border-b-[1px]"
            >
              Profile
            </li>
            <li
              onClick={() => handleLogout()}
              className="sm:w-[100px] md:w-[150px]  py-[2px] text-center sm:text-lg md:text-xl hover:bg-[#f1f1f1] hover:text-indigo-500"
            >
              Log out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

User.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  userName: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginStatus: (value) =>
      dispatch({ type: "SET_LOGIN_STATUS", payload: value }),
  };
};

export default connect(null, mapDispatchToProps)(User);
