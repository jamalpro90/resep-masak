import React from 'react';
import './LatestItem.scss';
import { ClockIcon, UserIcon, ThumbUpIcon } from '@heroicons/react/solid';

const LatestItem = () => {
  return (
    <div className="recipe">
      <img src="http://placeimg.com/640/480/animals" />

      <div className="icons">
        <ClockIcon className="icon" />
        <span className="text-icon">15 Menit</span>
        <UserIcon className="icon" />
        <span className="text-icon">3 Porsi</span>
        <ThumbUpIcon className="icon" />
        <span className="text-icon">Mudah</span>
      </div>

      <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, tempora.</p>
    </div>
  );
};

export default LatestItem;
