import React from "react";
import { connect } from "react-redux";
import ChangeGmailModal from "./changeGmailModal";
import ChangePassWordModal from "./changePasswordModal";
import ChangePhoneModal from "./changePhoneModal";
import ChangeUsernameModal from "./changeUsernameModal";

function Content({
  isChangeUsername,
  setIsChangeUsername,
  isChangeGmail,
  setIsChangeGmail,
  isChangePhone,
  setIsChangePhone,
  currentUser,
  setUsers,
  users,
  setCurrentUser,
  isChangePass,
  setIsChangePass,
}) {
  return (
    <div className="sm:w-full  md:max-w-[80%] sm:p-4 md:p-0">
      <div className="flex items-center gap-x-[16px]">
        <img
          className="md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] rounded-[50%] "
          src="https://manhdung99.github.io/tarabol-app-front-end-web/static/media/image.ced1cdc744fa949c65b5.png"
          alt="avatar"
        />
        <p className="sm:text-2xl sm:font-semibold md:font-[500] md:text-3xl lg:text-5xl">
          {currentUser.displayName}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 mt-10">
        <div className="flex justify-between items-center">
          <div className="cursor-default">
            <p className=" sm:text-[18px] md:text-[24px] uppercase">UserName</p>
            <p className=" sm:text-[16px] md:text-[20px] ">
              {currentUser.displayName}
            </p>
          </div>
          <div>
            <button
              onClick={() => setIsChangeUsername(true)}
              className="px-8 py-[8px] bg-[#23272A] text-[18px] text-white rounded-[4px] font-bold hover:bg-[#686d73]"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="cursor-default">
            <p className=" sm:text-[18px] md:text-[24px] uppercase">email</p>
            <p className=" sm:text-[16px] md:text-[20px]">
              *****************@gmail.com
            </p>
          </div>
          <div>
            <button
              onClick={() => setIsChangeGmail(true)}
              className="px-8 py-[8px] bg-[#23272A] text-[18px] text-white rounded-[4px] font-bold hover:bg-[#686d73]"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="cursor-default">
            <p className=" sm:text-[18px] md:text-[24px] uppercase">
              phone number
            </p>
            <p className=" sm:text-[16px] md:text-[20px]">
              {currentUser.phone.substring(0, 4)}****
              {currentUser.phone.substring(
                currentUser.phone.length - 2,
                currentUser.phone.length
              )}
            </p>
          </div>
          <div>
            <button
              onClick={() => setIsChangePhone(true)}
              className="px-8 py-[8px] bg-[#23272A] text-[18px] text-white rounded-[4px] font-bold hover:bg-[#686d73]"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={() => setIsChangePass(true)}
          className="sm:ml-[50%]  sm:translate-x-[-50%] md:ml-0 md:translate-x-[0] bg-[#0774B1] sm:text-[16px] md:text-2xl sm:px-3 sm:py-2 md:px-5 md:py-2 rounded-[10px] text-white font-bold hover:bg-[#2AA4E8] "
        >
          Change Password
        </button>
      </div>
      {isChangeUsername && (
        <ChangeUsernameModal setIsChangeUsername={setIsChangeUsername} />
      )}
      {isChangeGmail && (
        <ChangeGmailModal setIsChangeGmail={setIsChangeGmail} />
      )}
      {isChangePhone && (
        <ChangePhoneModal
          setIsChangePhone={setIsChangePhone}
          currentUser={currentUser}
          setUsers={setUsers}
          users={users}
          setCurrentUser={setCurrentUser}
        />
      )}
      {isChangePass && (
        <ChangePassWordModal setIsChangePass={setIsChangePass} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    users: state.userReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (value) => dispatch({ type: "SET_USERS", payload: value }),
    setCurrentUser: (value) =>
      dispatch({ type: "SET_CURRENT_USER", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
