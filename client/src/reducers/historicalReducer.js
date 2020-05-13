export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_HISTORICAL":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
