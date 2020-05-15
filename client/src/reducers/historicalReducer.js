export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_HISTORICAL":
      return action.payload;
    default:
      return state;
  }
};
