/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Carousel from '../components/Carousel/Carousel';
import Category from '../components/Category/Category';
import Footer from '../components/Footer/Footer';
import Latest from '../components/Latest/Latest';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Carousel />
      <Latest />
      <Category />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default Home;
