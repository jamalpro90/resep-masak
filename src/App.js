/* eslint-disable no-unused-vars */
import './styles/App.scss';
import Header from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Latest from './components/Latest/Latest';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import LoginModal from './components/LoginModal/LoginModal';
import { modalContext } from './utils/Context';
import { useContext } from 'react';
import RegisterModal from './components/RegisterModal/RegisterModal';

function App() {
  const openModal = useContext(modalContext);

  return (
    <div className="App">
      {openModal.state.loginModal && <LoginModal />}
      {openModal.state.registerModal && <RegisterModal />}
      <Header />
      <Carousel />
      <Latest />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
