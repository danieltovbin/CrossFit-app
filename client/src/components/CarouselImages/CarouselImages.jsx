import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import './carouselImgStyle.scss'

const CarouselImages = ({firstImgSrc, secondImgSrc, thirdImgSrc}) => {
  return (
    <div className="images-carousel">
    <Carousel interval={1000}>
      <Carousel.Item>
        <img
          src={firstImgSrc}
          className="d-block w-100"
          alt="CrossFit Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={secondImgSrc}
          className="d-block w-100"
          alt="CrossFit Img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={thirdImgSrc}
          className="d-block w-100"
          alt="CrossFit Img"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselImages