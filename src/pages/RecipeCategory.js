/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import RecipeCategoryContent from '../components/RecipeCategoryContent/RecipeCategoryContent';
import RecipeDetailContent from '../components/RecipeDetailContent/RecipeDetailContent';

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
