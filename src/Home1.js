import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import "./Carousel.css"; // CSS file for styling
import './Header1.css'
import image1 from './pp.jpg'
import image2 from './cspdcl3.jpg'
import image3 from './csp1.jpg'
import image4 from './csp2.jpg'
import image5 from './csp3.jpg'
import image6 from './power plant.jpg'
// import image7 from './power.jpg'
// import image8 from './cs.jpg'

const Home1 = () => {
  return (
    <div className="carousel-container">
      {/* <Carousel autoplay
        arrows={true} */}
        <Carousel autoplay dots={false} arrows={true}
        a={<LeftOutlined className="custom-arrow left-arrow" />}
        b={<RightOutlined className="custom-arrow right-arrow" />}
      >
        <div className="carousel-slide">
        <img src={image1} alt="Image 1" />  
        </div>
        <div className="carousel-slide">
        <img src={image2} alt="Image 2" />
        </div>
        <div className="carousel-slide">
        <img src={image3} alt="Image 3" />
        </div>
        <div className="carousel-slide">
        <img src={image4} alt="Image 4" />
        </div>
        <div className="carousel-slide">
        <img src={image5} alt="Image 5" />
        </div>
        <div className="carousel-slide">
        <img src={image6} alt="Image 6" />
        </div>
        {/* <div className="carousel-slide">
        <img src={image7} alt="Image 7" />
        </div> */}
        {/* <div className="carousel-slide">
        <img src={image8} alt="Image 8" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default Home1;
