import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../FeaturedProducts/FeaturedProduts.scss";
import img1 from "../../../Images/img1.jpg";
import img2 from "../../../Images/img2.jpg";
import img3 from "../../../Images/img3.jpg";
import img4 from "../../../Images/img4.jpg";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";

class FeaturedProducts extends React.Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div className="carouselContainer">
        <h3 className="productHead">Featured Products</h3>
        <p className="productSub">Unde omnis iste natus error sit voluptatem</p>
        <Slider className="slideCase" {...settings}>
          <div id="featureCard">
            <img id="slideImage" src={img1} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img2} alt="image of Gracious home" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img
              id="slideImage"
              src={img3}
              alt="image of man using touch stick on smart screen"
            />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img4} alt="image of sales force 1" />
            <div className="cardText">
              <p className="cardDescribtion">Hezy Theme</p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img1} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img2} alt="apple ipad and computer set" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Marketing</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img3} alt="image of Gracious home" />
            <div className="cardText">
              <p className="cardDescribtion">
                Kristina Dam Oak Table With White Marble
              </p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>

          <div id="featureCard">
            <img id="slideImage" src={img4} alt="image of sales force 1" />
            <div className="cardText">
              <p className="cardDescribtion">Hezy Theme</p>
              <p className="cardTitle">Awesome</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default FeaturedProducts;