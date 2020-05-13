import axios from "../api/crypto";

export const fetchCoins = () => async (dispatch) => {
  const response = await axios.get("/coins");
  dispatch({ type: "FETCH_COINS", payload: response.data });
};

export const searchCoins = (term) => (dispatch) => {
  dispatch({ type: "SEARCH_COINS", payload: term });
};

export const fetchHistoricalData = (coin) => async (dispatch) => {
  const response = await axios.get(`/historical/${coin}`);
  dispatch({ type: "FETCH_HISTORICAL", payload: response.data.Data });
};
