import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Category.scss';

const Category = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  return (
    <div className="ca-wrapper">
      {/* Heading */}
      <h2>Kategori</h2>

      {/* Categories */}
      <div className="categories">
        {datas && datas.map((data) => <CategoryItem key={data.key} data={data} />)}
      </div>
    </div>
  );
};

export default Category;
