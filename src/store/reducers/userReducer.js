const initState = {
  users: [
    {
      username: "DungNM25@gmail.com",
      password: "123456",
      displayName: "Nguyễn Mạnh Dũng",
      email: "manhdung1999it@gmail.com",
      phone: "0965941246",
    },
    {
      username: "ManhDung@gmail.com",
      password: "1234567",
      displayName: "Nguyễn Mạnh Dũng",
      email: "manhdung1999it@gmail.com",
      phone: "0965941246",
    },
  ],
  isLogin: false,
  currentUser: {},
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
    case "SET_CURRENT_USER":
      let newUser = action.payload;
      return {
        ...state,
        currentUser: newUser,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
