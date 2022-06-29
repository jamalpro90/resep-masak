import React, { useContext } from 'react';
import Button from '../Button/Button';
import './LoginModal.scss';
import { XIcon } from '@heroicons/react/solid';
import { modalContext } from '../../utils/Context';

const LoginModal = () => {
  const openModal = useContext(modalContext);

  const handleOpenRegisterModal = () => {
    openModal.dispatch({ type: 'close-login' });
    openModal.dispatch({ type: 'open-register' });
  };

  return (
    <div className="back-gray">
      <div className="lm-wrapper">
        {/* Close Icon */}
        <XIcon className="x-icon" onClick={() => openModal.dispatch({ type: 'close-login' })} />

        {/* Login With Email */}
        <h3>Masuk menggunakan email</h3>
        <form>
          <input type="email" name="email" placeholder="Email" className="email" />
          <input type="password" name="password" placeholder="Password" className="password" />
          <Button type="submit" text="Masuk" />
        </form>
        <p className="register">
          Belum punya akun <span onClick={handleOpenRegisterModal}>Daftar</span>
        </p>

        {/* OR */}
        <div className="or">
          <span>atau</span>
        </div>

        {/* Login With Social Media */}
        <h3>Masuk menggunakan sosial media</h3>
        <ul className="sosmed">
          <li>Google</li>
          <li>Github</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginModal;
