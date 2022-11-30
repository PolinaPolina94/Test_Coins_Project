import { applyMiddleware, combineReducers, createStore } from "redux";
import CoinReducer from "./coin-reducer";
import thunkMiddleware from "redux-thunk";
import PortfolioReducer from "./portfolio-reducer";
import ModalReducer from "./modal-reducer";

let reducers = combineReducers({
  coins: CoinReducer,
  portfolio: PortfolioReducer,
  modal: ModalReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
