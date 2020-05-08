import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  coins: coinsReducer,
  searchTerm: searchReducer,
});
