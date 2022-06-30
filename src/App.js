import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import RecipeDetail from './pages/RecipeDetail';
import RegisterModal from './components/RegisterModal/RegisterModal';
import { modalContext } from './utils/Context';
import { useContext } from 'react';
import LoginModal from './components/LoginModal/LoginModal';
import RecipeCategory from './pages/RecipeCategory';

const App = () => {
  const openModal = useContext(modalContext);

  return (
    <div className="App">
      {openModal.state.loginModal && <LoginModal />}
      {openModal.state.registerModal && <RegisterModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resep/:key" element={<RecipeDetail />} />
        <Route path="resep-masakan/:key" element={<RecipeCategory />} />
      </Routes>
    </div>
  );
};

export default App;
