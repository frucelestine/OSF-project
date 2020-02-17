import React from "react";
import Slider from "react-slick";
import sliderImg from "../../../Images/sliderImg.jpg";
import "./WithCloud.scss";
import { Button } from "@material-ui/core";
import Discount from "./Discount";

function SampleNextArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

export default class extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: false,
      nextArrow: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            borderRadius: "10px",
            bottom: "40px",
            padding: "10px"
          }}
        >
          <ul
            style={{
              margin: "0px",
              padding: '0px',
            }}
          >
            {dots}
          </ul>
        </div>
      )
    };
    return (
      <div className="withCloudContainer">
        <div className="slider">
          <div id="sliderText">
            <h3 className="mainText">
              Controle and manage any device with cloud solutions
            </h3>
            <h6 className="secondaryText">
              Improve business performance and the user experience with the
              right mix of IoT technology and processes
            </h6>
            <Button id="moreBtn" variant="outlined">
              VIEW MORE
            </Button>
          </div>
          <Slider {...settings} >
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
          </Slider>
        </div>
        <Discount />
      </div>
    );
  }
}
