import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import searchReducer from "./searchReducer";
import historicalReducer from "./historicalReducer";

export default combineReducers({
  coins: coinsReducer,
  searchTerm: searchReducer,
  historicalData: historicalReducer,
});
