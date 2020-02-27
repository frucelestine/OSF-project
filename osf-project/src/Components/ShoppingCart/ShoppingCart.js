import React, { Component } from "react";
import QuantityPicker from "../../Components/Main/ProductDetail/QuantityPicker";
import "./ShoppingCart.scss";

export class ShoppingCart extends Component {
  render() {
    return (
      <div className="shoppingCart">
        <div className="shoppingBrowse">
          <span>Home </span> / <span> Shopping Cart </span>
        </div>
        <h2 className="shoppingHead">SHOPPING CART</h2>
        <div className="shoppingBody">
          <div className="shoppingItem">
            <div className="itemInfo">
              <img className="itemImg" src="" href="shopping item" />
              <div className="itemText">
                <p className="textDescription">
                  Kristina Dam Oak Table With white Marble Top
                </p>
                <p className="textPrice">$2,195.00</p>
              </div>
            </div>
            <div className="itemPricing">
              <QuantityPicker className="quantity" />
              <h4 className="pricePerItem">$2,195</h4>
              <button className="deleteBtn">x</button>
            </div>
          </div>
        </div>
        <div className="billing">
          <div className="shoppingCoupon">
            <form className="useCoupon">
              <input
                className="enterCoupon"
                type="text"
                placeholder="Enter Coupon Code"
              />
              <button className="applyBtn">APPLY</button>
            </form>
          </div>
          <div className="checkout">
            <div className="updateCart">
              <button className="updateCartBtn">UPDATE CART</button>
              <button className="checkoutBtn">PROCEED TO CHECKOUT</button>
            </div>
            <div className='subTotal'>
              <p className='subTotalTitle'>CART SUBTOTAL:</p>
              <p className='subTotalPrice'>$3,489</p>
            </div>
            <div className='shipping'>
              <h4 className='shippingTitle'>SHIPPING AND HANDLING:</h4>
              <div className='feesHandling'></div>
            </div>
            <div className='order'>
              <h4 className='orderTitle'>ORDER TOTAL</h4>
              <h3 className='orderPrice'>$3,489</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
