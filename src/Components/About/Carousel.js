import "./Carousel.css";

import React, { useState } from "react";

import one from './Assests/house.jpg';
import three from './Assests/house.jpg';
import two from './Assests/Home.webp';

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
   one,two,three,one
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="carousel carouselbackground">
      <div className="carousel-inner">
        <img
          src={images[getPrevIndex()]}
          alt="Previous"
          className="prev"
          onClick={() => handleImageClick(getPrevIndex())}
        />
        <img
          src={images[currentIndex]}
          alt="Current"
          className="current"
        />
        <img
          src={images[getNextIndex()]}
          alt="Next"
          className="next"
          onClick={() => handleImageClick(getNextIndex())}
        />
      </div>
      <div className="bars">
        {images.map((_, index) => (
          <span
            key={index}
            className={`bar ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleImageClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
