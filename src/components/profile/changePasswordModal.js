import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { setUsers, setCurrentUser } from "../../store/action/userAction";
function ChangePassWordModal({
  setIsChangePass,
  currentUser,
  setUsers,
  users,
  setCurrentUser,
}) {
  const [currentPass, setCurrentPass] = useState("");
  const [isWrongPass, setIsWrongPass] = useState(false);
  const [isWrongPassConfirm, setIsWrongPassConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleUpdateUsername = () => {
    if (currentPass === currentUser.password) {
      if (confirmPassword === newPassword) {
        let newCurrentUser = { ...currentUser, password: newPassword };
        let newUsers = [...users];
        let userIndex = users.findIndex(
          (user) => user.username === newCurrentUser.username
        );
        newUsers[userIndex] = newCurrentUser;
        setUsers(newUsers);
        setCurrentUser(newCurrentUser);
        setIsChangePass(false);
      } else {
        setIsWrongPassConfirm(true);
      }
    } else {
      setIsWrongPass(true);
    }
  };

  const userNameRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleCloseShowPhoneModal, true);
    return () => {
      document.removeEventListener("click", handleCloseShowPhoneModal, true);
    };
  });
  const handleCloseShowPhoneModal = (e) => {
    if (userNameRef.current && !userNameRef.current.contains(e.target)) {
      return setIsChangePass(false);
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] z-[10] flex items-center justify-center ">
      <div
        ref={userNameRef}
        className="sm:w-[95%] md:w-[440px] bg-[#36393f] rounded-[8px] overflow-hidden"
      >
        <div className="px-6 py-4 text-center relative">
          <p className="text-[24px] text-[#fff]">Change your password</p>
          <p className="text-[#B9BBBE]">
            Enter a new password and your existing password
          </p>
          <span
            onClick={() => setIsChangePass(false)}
            className="absolute top-2 right-4 cursor-pointer group"
          >
            <svg aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path
                className="group-hover:fill-white"
                fill="#4752c4"
                d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="p-4">
          <form className="flex flex-col gap-y-3">
            <div>
              <p className="text-[#B9BBBE] uppercase mb-2 text-[12px] font-bold ">
                current password
              </p>
              <input
                value={currentPass}
                autoComplete="none"
                onFocus={() => setIsWrongPass(false)}
                onChange={(e) => setCurrentPass(e.target.value)}
                type="password"
                className="w-full py-[8px] outline-0 px-2  bg-[#202225] rounded-[4px] text-[#B9BBBE]"
              />
              {isWrongPass && <p className="text-[red]">password incorect</p>}
            </div>
            <div>
              <p className="text-[#B9BBBE] uppercase mb-2 text-[12px] font-bold ">
                new password
              </p>
              <input
                value={newPassword}
                autoComplete="none"
                onFocus={(e) => setIsWrongPassConfirm(false)}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                className="w-full py-[8px] outline-0 px-2  bg-[#202225] rounded-[4px] text-[#B9BBBE]"
              />
            </div>
            <div>
              <p className="text-[#B9BBBE] uppercase mb-2 text-[12px] font-bold ">
                confirm password
              </p>
              <input
                value={confirmPassword}
                autoComplete="none"
                onFocus={(e) => setIsWrongPassConfirm(false)}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="w-full py-[8px] outline-0 px-2  bg-[#202225] rounded-[4px] text-[#B9BBBE]"
              />
              {isWrongPassConfirm && (
                <p className="text-[red]">confirm password not match</p>
              )}
            </div>
          </form>
        </div>
        <div className="bg-[#2F3136] p-4 flex justify-end">
          <button
            onClick={() => setIsChangePass(false)}
            className="py-[8px] px-[24px] text-[14px] font-bold text-white hover:opacity-80"
          >
            Cancel
          </button>
          <button
            onClick={() => handleUpdateUsername()}
            className="bg-[#5865F2]  py-[8px] px-[24px] text-[14px] font-bold text-white rounded-[4px] hover:bg-[#4752c4]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    users: state.userReducer.users,
  };
};
const mapDispatchToProps = {
  setUsers,
  setCurrentUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassWordModal);
