import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Category.scss';

const Category = () => {
  return (
    <div className="ca-wrapper">
      {/* Heading */}
      <h2>Kategori</h2>

      {/* Categories */}
      <div className="categories">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default Category;
