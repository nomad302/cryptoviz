const INITIAL_STATE = { value: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_COINS":
      const { value } = action;
      return { ...state, value };
    default:
      return state;
  }
};
