const INITIAL_STATE = { value: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COIN": {
      const value = action.payload;
      return { ...state, value };
    }

    default:
      return state;
  }
};
