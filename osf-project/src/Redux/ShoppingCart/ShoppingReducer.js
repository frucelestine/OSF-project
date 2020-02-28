
import { ADD_SHOPPING, REMOVE_SHOPPING } from "./ShoppingTypes";

const initialState = {
  shoppingCount: 2355
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING: 
      return {
        ...state,
        shoppingCount: state.shoppingCount + state.shoppingCount
      };
    case REMOVE_SHOPPING:
      return {
        shoppingCount: state.shoppingCount - 2355
      }
    default:
      return state;
  }
};

export default shopReducer;
