/* eslint-disable react/prop-types */
import React from 'react';
import './RecipeDetailContent.scss';
import { ClockIcon, UserIcon, ThumbUpIcon } from '@heroicons/react/solid';

const RecipeDetailContent = ({ data }) => {
  return (
    <div className="rdc-wrapper">
      {/* Title */}
      <h2>{data.title}</h2>

      {/* Image */}
      <div className="img-wrapper">
        {/* Jika gambar nggak ada, ambil dari offline dan ubah object fit ke contain */}
        <img
          src={data.thumb || '/img/image-not-found.png'}
          style={!data.thumb ? { objectFit: 'contain' } : { objectFit: '' }}
          alt={data.title}
        />
      </div>

      {/* Icons & Description The Icons */}
      <div className="icons">
        <ClockIcon className="icon" />
        <span className="text-icon">{data.times}</span>
        <UserIcon className="icon" />
        <span className="text-icon">{data.portion || data.servings}</span>
        <ThumbUpIcon className="icon" />
        <span className="text-icon">{data.dificulty}</span>
      </div>

      {/* Author & Date Publish */}
      <div className="author">
        <span>{data.author.user} </span> |<span> {data.author.datePublished}</span>
      </div>

      {/* Description */}
      <div className="desc">{data.desc}</div>

      {/* Ingredients */}
      <h3>Bahan - Bahan</h3>
      <ul className="ingredients">
        {data.ingredient.map((data, i) => (
          <li key={i}>
            <span>{data}</span>
          </li>
        ))}
      </ul>

      {/* Steps */}
      <h3>Cara Membuat</h3>
      <div className="steps">
        {data.step.map((data, i) => (
          <p key={i}>
            <span className="large">{data[0]}</span> {data.slice(1, -1)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetailContent;
