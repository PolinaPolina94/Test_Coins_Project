// import { coinAPI } from "../api/api";

const ADD_COIN = "ADD_COIN";

const initialState = {
  listOfMyCoins: [{ rank: null, name: null }],
};

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      let newCoinName = action.coinName;
      return {
        ...state,
        listOfMyCoins: [
          ...state.listOfMyCoins,
          { rank: action.coinRank, name: newCoinName },
        ],
      };
    default:
      return state;
  }
};

export const addCoin = (coinName, coinRank) => {
  return { type: ADD_COIN, coinName, coinRank };
};

// export const getCoins = () => {
//   return async (dispatch) => {
//     let coins = await coinAPI.getCoins();
//     dispatch(setCoins(coins));
//   };
// };

// export const getCoinInfo = (coinId) => {
//   return async (dispatch) => {
//     let coinInfo = await coinAPI.getCoinInfo(coinId);
//     // debugger;
//     dispatch(setCoinsInfo(coinInfo));
//   };
// };

export default PortfolioReducer;
