import React from 'react';
import './Header.scss';
import './HeaderMedia.scss'


function MobileIcons() {
    return (
      <div className="MobileIcons">
        <div id="footIcons">
          <i class="fas fa-search"></i>
          <i class="far fa-user"></i>
          <i class="far fa-heart">
            <p id="countShow"></p>
          </i>
          <i class="fas fa-shopping-basket">
            <p id="countShow"></p>
          </i>
        </div>
      </div>
    );
}

export default MobileIcons

