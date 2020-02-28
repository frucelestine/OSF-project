import { combineReducers } from 'redux'
import CartReducer from './Cart/CartReducer'
import WishReducer from './Wish/WishReducer'
import shopReducer  from './ShoppingCart/ShoppingReducer';

const rootReducer = combineReducers({
    Cart: CartReducer,
    Wish: WishReducer,
    Shop: shopReducer
})

export default rootReducer