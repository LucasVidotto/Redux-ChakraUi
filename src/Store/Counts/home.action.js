import * as types from "../Redux/types";

export const increaseCount = () => {
  return {
    type: types.COUNTER,
  };
};

export const decreCount = () => {
  return {
    type: types.DECRE,
  };
};
