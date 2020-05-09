import axios from "../api/crypto";

export const fetchCoins = () => async (dispatch) => {
  const response = await axios.get("/data/top/mktcapfull?limit=100&tsym=USD");
  dispatch({ type: "FETCH_COINS", payload: response.data.Data });
};

export const searchCoins = (term) => (dispatch) => {
  dispatch({ type: "SEARCH_COINS", payload: term });
};
