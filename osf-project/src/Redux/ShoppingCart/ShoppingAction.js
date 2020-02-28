import { ADD_SHOPPING, REMOVE_SHOPPING } from "./ShoppingTypes";


export const addShopping = () => {
  return {
    type: ADD_SHOPPING,
  };
};

export const removeShopping = () => {
  return {
    type: REMOVE_SHOPPING,
  };
}
