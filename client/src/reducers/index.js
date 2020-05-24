import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import searchReducer from "./searchReducer";
import historicalReducer from "./historicalReducer";
import coinNews from "./coinNewsReducer";
import currentCoinReducer from "./currentCoinReducer";

export default combineReducers({
  coins: coinsReducer,
  searchTerm: searchReducer,
  currentCoin: currentCoinReducer,
  historicalData: historicalReducer,
  coinNews: coinNews,
});
