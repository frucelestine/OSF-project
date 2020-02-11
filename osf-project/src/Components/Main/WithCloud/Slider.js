import React from "react";
import Carousel from "nuka-carousel";
import sliderImg from '../../../Images/sliderImg.jpg'
import './WithCloud.scss'
import { Button } from "@material-ui/core";
import Discount from './Discount'

export default class extends React.Component {

  render() {
    return (
      <div className='withCloudContainer'>
        <div className="slider">
        <div className="sliderTitle">
          <h3 className="mainText">
            Controle and manage any device with cloud solutions
          </h3>
          <h6 className="secondaryText">
            Improve business performance and the user experience with the right
            mix of IoT technology and processes
          </h6>
          <Button id='moreBtn' variant="outlined">VIEW MORE</Button>
        </div>
        <Carousel
          wrapAround={true}
          autoplay={true}
          className="sliderCarousel"
          Carousel
          slidesToShow={1}
        >
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
          <img
            className="sliderImage"
            src={sliderImg}
            alt="Image of woman and shopping bags"
          />
        </Carousel>
        </div>
        <Discount />
        </div>
    );
  }
}
