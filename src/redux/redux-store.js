import { applyMiddleware, combineReducers, createStore } from "redux";
import CoinReducer from "./coin-reduser";
import thunkMiddleware from "redux-thunk"; 



let reducers = combineReducers({
    coins : CoinReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 


export default store; 