import React from "react";
import './WithCloud.scss';
import { Button } from "@material-ui/core";
import palmTree from '../../../Images/palmTree.png'
import FacebookIcon from '@material-ui/icons/Facebook';

function Discount() {
  return (
    <div className="discountContainer">
      <div className="discountPaper">
        <h3 className="discountPercent">55%</h3>
        <h4 className="percentDescribe">SUMMER SALES</h4>
        <img
          className="palmTree"
          src={palmTree}
          alt="image of a palm tree"
        ></img>
      </div>
      <h5 className="followUS">Follow us on Facebook</h5>

      <p className="followDescribe">
        Sed ut perspiciatis unde omnis iste natus error sit
      </p>
          <Button
              startIcon={<FacebookIcon />}
              id="percentBtn" variant="outlined">
        FOLLOW
      </Button>
    </div>
  );
}

export default Discount;
