import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import Carousel from './components/Carousel/Carousel';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Latest from './components/Latest/Latest';
import LoginModal from './components/LoginModal/LoginModal';
import Navbar from './components/Navbar/Navbar';
import RegisterModal from './components/RegisterModal/RegisterModal';
import './styles/App.scss';
import { modalContext } from './utils/Context';

function App() {
  const openModal = useContext(modalContext);

  return (
    <div className="App">
      {openModal.state.loginModal && <LoginModal />}
      {openModal.state.registerModal && <RegisterModal />}
      <Navbar />
      <Carousel />
      <Latest />
      <Category />
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
