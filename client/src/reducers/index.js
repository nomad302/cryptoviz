import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import searchReducer from "./searchReducer";
import historicalReducer from "./historicalReducer";
import coinNews from "./coinNewsReducer";

export default combineReducers({
  coins: coinsReducer,
  searchTerm: searchReducer,
  historicalData: historicalReducer,
  coinNews: coinNews,
});
