/* eslint-disable react/prop-types */
import React from 'react';
import './CategoryItem.scss';
import { Link } from 'react-router-dom';

const CategoryItem = ({ data }) => {
  return (
    <Link to={`/resep-masakan/${data.key}`}>
      <div className="category-item">
        <img src={`/img/${data.key}.jpg`} />

        <p className="text">{data.category}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
