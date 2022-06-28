import React from 'react';
import LatestItem from '../LatestItem/LatestItem';
import './Latest.scss';

const Latest = () => {
  return (
    <div className="la-wrapper">
      {/* Heading */}
      <h2>Latest</h2>

      {/* Recipes */}
      <div className="recipes">
        {/* Recipe */}
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
        <LatestItem />
      </div>
    </div>
  );
};

export default Latest;
