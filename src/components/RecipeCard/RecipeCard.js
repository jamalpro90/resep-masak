/* eslint-disable react/prop-types */
import React from 'react';
import './RecipeCard.scss';
import { ClockIcon, UserIcon, ThumbUpIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const RecipeCard = ({ data }) => {
  return (
    <Link to={`/resep/${data.key}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="recipe">
        <div className="img-wrapper">
          <img src={data.thumb} />
        </div>

        <div className="icons">
          <ClockIcon className="icon" />
          <span className="text-icon">{data.times}</span>
          <UserIcon className="icon" />
          <span className="text-icon">{data.portion}</span>
          <ThumbUpIcon className="icon" />
          <span className="text-icon">{data.dificulty}</span>
        </div>

        <p className="text">{data.title}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
