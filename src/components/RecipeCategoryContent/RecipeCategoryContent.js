import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeCategoryContent.scss';

const RecipeCategoryContent = () => {
  const { key } = useParams();
  const [datas, setDatas] = useState(null);

  // console.log(data);

  useEffect(() => {
    fetch(`https://masak-apa-tomorisakura.vercel.app/api/category/recipes/${key}`)
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  if (!datas) return null;

  return (
    <div className="rcc-wrapper">
      {/* Title */}
      <h2>{key.replace(/-/, ' ').toUpperCase()}</h2>

      {/* Recipes */}
      <div className="recipes">
        {/* Loop Recipe */}
        {datas && datas.map((data) => <RecipeCard key={data.key} data={data} />)}
      </div>
    </div>
  );
};

export default RecipeCategoryContent;
