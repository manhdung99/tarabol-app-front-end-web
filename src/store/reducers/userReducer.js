const initState = {
  users: [
    {
      username: "DungNM25@gmail.com",
      password: "123456",
    },
    {
      username: "ManhDung@gmail.com",
      password: "1234567",
    },
  ],
  isLogin: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      let newData = [...state.users, action.payload];
      return {
        ...state,
        users: [...newData],
      };
    case "SET_LOGIN_STATUS":
      let loginStatus = action.payload;
      return {
        ...state,
        isLogin: loginStatus,
      };
    default:
      return state;
  }
};

export { userReducer };
