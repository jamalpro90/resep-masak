/* eslint-disable no-unused-vars */
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RecipeCategoryContent from '../components/RecipeCategoryContent/RecipeCategoryContent';

function RecipeCategory() {
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
