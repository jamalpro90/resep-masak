import { ToastContainer } from 'react-toastify';
import Carousel from '../components/Carousel/Carousel';
import Category from '../components/Category/Category';
import Footer from '../components/Footer/Footer';
import Latest from '../components/Latest/Latest';
import Navbar from '../components/Navbar/Navbar';

function Home() {
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
