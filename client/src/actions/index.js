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
  const arr = response.data.Data.Data.map(({ time, close }) => [
    time * 1000,
    close,
  ]);
  dispatch({ type: "FETCH_HISTORICAL", payload: arr });
};

export const fetchCoinNews = () => async (dispatch) => {
  const response = await axios.get(`/news`);
  dispatch({ type: "FETCH_COIN_NEWS", payload: response.data });
};

export const setCurrentCoin = (coin) => async (dispatch) => {
  dispatch({ type: "SET_COIN", payload: coin });
  dispatch(fetchHistoricalData(coin));
};
