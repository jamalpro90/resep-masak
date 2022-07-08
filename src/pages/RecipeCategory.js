/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RecipeCategoryContent from '../components/RecipeCategoryContent/RecipeCategoryContent';

function RecipeCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <RecipeCategoryContent />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default RecipeCategory;
