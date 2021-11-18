import * as types from "../Redux/types";
const initialState = {
  count: 0,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case types.COUNTER: {
      const newCount = state.count + 1;
      return {
        ...state,
        count: newCount,
      };
    }
    case types.DECRE: {
      const newDCount = state.count - 1;
      return {
        ...state,
        count: newDCount,
      };
    }
    default:
      return state;
  }
};

export default reducer;
