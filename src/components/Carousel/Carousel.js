import React from 'react';
import './Carousel.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as CaroWrapper } from 'react-responsive-carousel';

const Carousel = () => {
  return (
    <div className="caro-wrapper">
      <CaroWrapper
        showThumbs={false}
        interval={4000}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}>
        <div>
          <img src="http://placeimg.com/640/480/animals" />
          <p className="legend">Animal</p>
        </div>
        <div>
          <img src="http://placeimg.com/640/480/nature" />
          <p className="legend">Nature</p>
        </div>
        <div>
          <img src="http://placeimg.com/640/480/people" />
          <p className="legend">People</p>
        </div>
        <div>
          <img src="http://placeimg.com/640/480/nature" />
          <p className="legend">Nature</p>
        </div>
      </CaroWrapper>
    </div>
  );
};

export default Carousel;
