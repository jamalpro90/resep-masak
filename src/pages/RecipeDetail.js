/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RecipeDetailContent from '../components/RecipeDetailContent/RecipeDetailContent';

function RecipeDetail() {
  const { key } = useParams();
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    fetch(`https://masak-apa-tomorisakura.vercel.app/api/recipe/${key}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  if (!data) return null;

  return (
    <div>
      <Navbar />
      <RecipeDetailContent data={data} />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default RecipeDetail;
