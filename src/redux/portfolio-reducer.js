const ADD_COIN = "ADD_COIN";

const initialState = {
  listOfMyCoins: [],
};

const PortfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      let newCoinName = action.coinName;
      let coinPrice = action.coinPrice;
      return {
        ...state,
        listOfMyCoins: [
          ...state.listOfMyCoins,
          { name: newCoinName, price: coinPrice },
        ],
      };
    default:
      return state;
  }
};

export const addCoin = (coinName, coinPrice) => {
  return { type: ADD_COIN, coinName, coinPrice };
};

export default PortfolioReducer;
