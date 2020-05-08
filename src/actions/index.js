import axios from "../api/crypto";

export const fetchCoins = () => async (dispatch) => {
  const response = await axios.get("/data/top/mktcapfull?limit=100&tsym=USD");
  console.log(response);
  dispatch({ type: "FETCH_COINS", payload: response.data.Data });
};

export const searchCoins = () => (dispatch, getState) => {
  const { searchTerm } = getState().searchTerm;
  dispatch({ type: "SEARCH_COINS", payload: searchTerm });
};
