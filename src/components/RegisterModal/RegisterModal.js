import React, { useContext, useState } from 'react';
import Button from '../Button/Button';
import './RegisterModal.scss';
import { XIcon } from '@heroicons/react/solid';
import { modalContext } from '../../utils/Context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/Firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterModal = () => {
  const openModal = useContext(modalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOpenLoginModal = () => {
    openModal.dispatch({ type: 'close-register' });
    openModal.dispatch({ type: 'open-login' });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (email === '' || password === '' || confirmPassword === '') {
      toast('Tidak boleh ada yang kosong', { type: 'error' });
      return;
    }
    if (password !== confirmPassword) {
      toast('Password tidak sama', { type: 'error' });
      return;
    }

    // Register Function
    createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        // Signed in
        toast('Cek email untuk verifikasi', { type: 'success' });
        openModal.dispatch({ type: 'close-register' });
        openModal.dispatch({ type: 'open-login' });
      })
      .catch((err) => {
        toast(err.message, { type: 'error' });
      });
  };

  return (
    <div className="back-gray">
      <div className="rm-wrapper">
        {/* Close Icon */}
        <XIcon className="x-icon" onClick={() => openModal.dispatch({ type: 'close-register' })} />

        {/* Login With Email */}
        <h3>Daftar</h3>
        <form onSubmit={handleRegister}>
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
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
