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
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      console.log(action.payload);
      let newData = [...state.users, action.payload];
      return {
        ...state,
        users: [...newData],
      };
    default:
      return state;
  }
};

export { userReducer };
