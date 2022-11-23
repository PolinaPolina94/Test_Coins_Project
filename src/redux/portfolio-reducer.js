// import { coinAPI } from "../api/api";

const ADD_COIN = "ADD_COIN";

const initialState = {
  listOfMyCoins: [],
};

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      let newCoinName = action.coinName;
      return {
        ...state,
        listOfMyCoins: [...state.listOfMyCoins, { name: newCoinName }],
      };
    default:
      return state;
  }
};

export const addCoin = (coinName) => {
  return { type: ADD_COIN, coinName };
};

export default PortfolioReducer;
