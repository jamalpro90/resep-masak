/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import '../styles/RecipeSearchResults.scss';

function RecipeSearchResults() {
  const params = useParams();
  const [datas, setDatas] = useState(null);
  const { key } = params;
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  console.log(key);

  // console.log(data);

  useEffect(() => {
    fetch(`https://masak-apa-tomorisakura.vercel.app/api/search/?q=${key}`)
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  if (!datas) return null;

  return (
    <div>
      <Navbar />

      <div className="rsv-wrapper">
        {/* Title */}
        <h2>{key.replace(/-/, ' ').toUpperCase()}</h2>

        {/* Recipes */}
        <div className="recipes">
          {/* Loop Recipe */}
          {datas && datas.map((data) => <RecipeCard key={data.key} data={data} />)}
        </div>
      </div>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default RecipeSearchResults;
