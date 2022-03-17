const initState = {
  newsDeck: [],
  trendingDeck: [],
  marketItems: [],
  userDecks: [],
  deckDetail: {},
  chapterDetail: {},
};

const deckReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NEWS_DECK":
      return {
        ...state,
        newsDeck: action.payload,
      };
    case "SET_TRENDING_DECK":
      return {
        ...state,
        trendingDeck: action.payload,
      };
    case "SET_MARKET_ITEMS":
      return {
        ...state,
        marketItems: action.payload,
      };
    case "SET_USER_DECKS":
      return {
        ...state,
        userDecks: action.payload,
      };
    case "SET_DETAIL_DECK":
      return {
        ...state,
        deckDetail: action.payload,
      };
    case "SET_DETAIL_CHAPTER":
      return {
        ...state,
        chapterDetail: action.payload,
      };
    case "SET_STATUS_CARD":
      let newData = { ...state.chapterDetail, cards: action.payload };
      return {
        ...state,
        chapterDetail: newData,
      };
    default:
      return state;
  }
};

export { deckReducer };
