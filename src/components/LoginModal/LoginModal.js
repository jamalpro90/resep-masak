import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import './LoginModal.scss';
import { XIcon } from '@heroicons/react/solid';
import { modalContext } from '../../utils/Context';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, githubProvider } from '../../utils/Firebase';
import { toast } from 'react-toastify';

const LoginModal = () => {
  const openModal = useContext(modalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpenRegisterModal = () => {
    openModal.dispatch({ type: 'close-login' });
    openModal.dispatch({ type: 'open-register' });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // Signed in
        openModal.dispatch({ type: 'close-login' });
      })
      .catch((err) => {
        toast(err.message, { type: 'error' });
      });
  };

  const handleLoginGithub = () => {
    signInWithPopup(auth, githubProvider)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        // The signed-in user info.
        openModal.dispatch({ type: 'close-login' });
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="back-gray">
      <div className="lm-wrapper">
        {/* Close Icon */}
        <XIcon className="x-icon" onClick={() => openModal.dispatch({ type: 'close-login' })} />

        {/* Login With Email */}
        <h3>Masuk menggunakan email</h3>
        <form onSubmit={handleLogin}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email"
            className="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            className="password"
          />
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
          <li onClick={handleLoginGithub}>Github</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginModal;
