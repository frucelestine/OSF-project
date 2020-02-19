import React from 'react';
import './Header.scss';
import './HeaderMedia.scss'
import { connect } from "react-redux";


const mapStateToProps = state => {
  return {
    cartCount: state.Cart.cartCount,
    wishCount: state.Wish.wishCount
  };
};



function MobileIcons(props) {
    return (
      <div className="MobileIcons">
        <div id="footIcons">
          <i class="fas fa-search"></i>
          <i class="far fa-user" data-toggle="modal" data-target="#myModal"></i>
          <i class="far fa-heart">
            <p id="countShow">{props.wishCount}</p>
          </i>
          <i class="fas fa-shopping-basket">
            <p id="countShow">{props.cartCount}</p>
          </i>
        </div>
      </div>
    );
}

 export default connect(mapStateToProps)(MobileIcons);

