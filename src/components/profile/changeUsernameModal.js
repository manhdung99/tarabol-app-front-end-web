import React, { useEffect, useRef, useState } from "react";

export default function ChangeUsernameModal({
  setIsChangeUsername,
  currentUser,
  setUsers,
  users,
  setCurrentUser,
}) {
  const [userNameCurrent, setUserNameCurrent] = useState(
    currentUser.displayName
  );
  const [currentPass, setCurrentPass] = useState("");
  const [isWrongPass, setIsWrongPass] = useState(false);

  const handleUpdateUsername = () => {
    if (currentPass === currentUser.password) {
      let newCurrentUser = { ...currentUser, displayName: userNameCurrent };
      let newUsers = [...users];
      let userIndex = users.findIndex(
        (user) => user.username === newCurrentUser.username
      );
      newUsers[userIndex] = newCurrentUser;
      setUsers(newUsers);
      setCurrentUser(newCurrentUser);
      setIsChangeUsername(false);
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
      return setIsChangeUsername(false);
    }
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] z-[10] flex items-center justify-center ">
      <div ref={userNameRef} className="w-[440px] bg-[#36393f] rounded-[8px]">
        <div className="px-6 py-4 text-center relative">
          <p className="text-[24px] text-[#fff]">Change your username</p>
          <p className="text-[#B9BBBE]">
            Enter a new username and your existing password
          </p>
          <span
            onClick={() => setIsChangeUsername(false)}
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
        <div className="p-4 flex flex-col gap-y-3">
          <div>
            <p className="text-[#B9BBBE] uppercase mb-2 text-[12px] font-bold ">
              username
            </p>
            <input
              type="text"
              value={userNameCurrent}
              onChange={(e) => setUserNameCurrent(e.target.value)}
              className="w-full py-[8px] outline-0 px-2  bg-[#202225] rounded-[4px] text-[#B9BBBE]   "
            />
          </div>
          <div>
            <p className="text-[#B9BBBE] uppercase mb-2 text-[12px] font-bold ">
              current password
            </p>
            <input
              value={currentPass}
              onFocus={(e) => setIsWrongPass(false)}
              onChange={(e) => setCurrentPass(e.target.value)}
              type="password"
              className="w-full py-[8px] outline-0 px-2  bg-[#202225] rounded-[4px] text-[#B9BBBE]"
            />
            {isWrongPass && <p className="text-[red]">password incorect</p>}
          </div>
        </div>
        <div className="bg-[#2F3136] p-4 flex justify-end">
          <button
            onClick={() => setIsChangeUsername(false)}
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
