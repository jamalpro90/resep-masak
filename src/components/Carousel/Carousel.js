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
          <img src="/img/sarapan.jpg" />
          <p className="legend">Sarapan</p>
        </div>
        <div>
          <img src="/img/resep-sayuran.jpg" />
          <p className="legend">Sayuran</p>
        </div>
        <div>
          <img src="/img/resep-ayam.jpg" />
          <p className="legend">Ayam</p>
        </div>
        <div>
          <img src="/img/resep-dessert.jpg" />
          <p className="legend">Dessert</p>
        </div>
      </CaroWrapper>
    </div>
  );
};

export default Carousel;
