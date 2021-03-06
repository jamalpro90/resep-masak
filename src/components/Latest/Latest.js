import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './Latest.scss';

const Latest = () => {
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=9')
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  return (
    <div className="la-wrapper">
      {/* Heading */}
      <h2>Terbaru</h2>

      {/* Recipes */}
      <div className="recipes">
        {/* Loop Recipe */}
        {datas && datas.map((data) => <RecipeCard key={data.key} data={data} />)}
      </div>
    </div>
  );
};

export default Latest;
