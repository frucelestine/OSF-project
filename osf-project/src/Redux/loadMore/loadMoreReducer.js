
// let response = await fetch("/article/fetch/logo-fetch.svg");

import { LOAD_MORE } from "./loadMoreTypes";

const initialState = {
  carts: []
};

const loadMoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MORE:
      return {
        ...state,
        carts: state.carts + 1
      };
    default:
      return state;
  }
};

export default loadMoreReducer;
