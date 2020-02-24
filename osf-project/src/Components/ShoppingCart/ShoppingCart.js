import React, { Component } from 'react'

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
                  <img className="itemImg" src={iage} href="shopping item" />
                  <div className="itemText">
                                <p className="textDescription"></p>
                                <p className='textPrice'></p>
                  </div>
                </div>
                        <div className="itemPricing">
                            
                        </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ShoppingCart
