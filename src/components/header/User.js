import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function User(props) {
  const logoutRef = useRef(null);
  const navigate = useNavigate();
  const [showUserItem, setShowUserItem] = useState(false);
  const handleLogout = () => {
    props.setLoginStatus(false);
    navigate("/tarabol-app-front-end-web/");
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseShowUserItemForm, true);
    return () => {
      document.removeEventListener("click", handleCloseShowUserItemForm, true);
    };
  });
  const handleCloseShowUserItemForm = (e) => {
    if (logoutRef.current && !logoutRef.current.contains(e.target)) {
      return setShowUserItem(false);
    }
  };

  return (
    <div
      ref={logoutRef}
      onClick={() => setShowUserItem(!showUserItem)}
      className="flex relative items-center mr-[1rem] cursor-pointer  "
    >
      <img
        className="w-[36px] h-[36px] rounded-[50%]"
        src={props.src}
        alt="Avatar"
      />
      <p className=" sm:hidden md:block ml-[0.5rem]">{props.userName}</p>
      {showUserItem && (
        <div className="absolute bg-[#fff] left-[-8px] bottom-[-40px] shadow-md shadow-[#0000040] border-[1px] rounded-[4px]  ">
          <ul className="after:absolute after:border-solid after:border-x-[15px] after:border-y-[10px] after:border-l-[transparent] after:border-r-[transparent] after:border-t-[transparent] after:border-b-[#ccc] after:top-[-20px] after:left-[60px] after:opacity-40 ">
            <li
              onClick={() => handleLogout()}
              className="w-[150px] py-[2px] text-center text-xl hover:bg-[#f1f1f1] hover:text-indigo-500"
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
