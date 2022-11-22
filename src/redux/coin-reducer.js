import { coinAPI } from "../api/api";

const SET_COINS = "SET_COINS";
const SET_COINS_INFO = "SET_COINS_INFO";

const initialState = {
  coins: [],
  coinInfo: {},
};

const CoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COINS:
      return { ...state, coins: [...action.coins] };

    case SET_COINS_INFO:
      return { ...state, coinInfo: { ...action.coinInfo } };

    default:
      return state;
  }
};

export const setCoins = (coins) => {
  return { type: SET_COINS, coins };
};

export const setCoinsInfo = (coinInfo) => {
  return { type: SET_COINS_INFO, coinInfo };
};

export const getCoins = () => {
  return async (dispatch) => {
    let coins = await coinAPI.getCoins();
    dispatch(setCoins(coins));
  };
};

export const getCoinInfo = (coinId) => {
  return async (dispatch) => {
    let coinInfo = await coinAPI.getCoinInfo(coinId);
    // debugger;
    dispatch(setCoinsInfo(coinInfo));
  };
};

export default CoinReducer;
