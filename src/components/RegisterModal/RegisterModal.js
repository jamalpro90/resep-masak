import React, { useContext } from 'react';
import Button from '../Button/Button';
import './RegisterModal.scss';
import { XIcon } from '@heroicons/react/solid';
import { modalContext } from '../../utils/Context';

const RegisterModal = () => {
  const openModal = useContext(modalContext);

  const handleOpenLoginModal = () => {
    openModal.dispatch({ type: 'close-register' });
    openModal.dispatch({ type: 'open-login' });
  };

  return (
    <div className="back-gray">
      <div className="rm-wrapper">
        {/* Close Icon */}
        <XIcon className="x-icon" onClick={() => openModal.dispatch({ type: 'close-register' })} />

        {/* Login With Email */}
        <h3>Daftar</h3>
        <form>
          <input type="email" name="email" placeholder="Email" className="email" />
          <input type="password" name="password" placeholder="Password" className="password" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="confim-password"
          />
          <Button type="submit" text="Daftar" />
        </form>

        <div className="login">
          Sudah punya akun <span onClick={handleOpenLoginModal}>Masuk</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
