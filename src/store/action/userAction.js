export const registerUser = (value) => {
  return {
    type: "REGISTER_USER",
    payload: value,
  };
};
export const setLoginStatus = (value) => {
  return {
    type: "SET_LOGIN_STATUS",
    payload: value,
  };
};

export const setCurrentUser = (value) => {
  return {
    type: "SET_CURRENT_USER",
    payload: value,
  };
};
export const setUsers = (value) => {
  return {
    type: "SET_USERS",
    payload: value,
  };
};
