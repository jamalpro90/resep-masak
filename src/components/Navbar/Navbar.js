/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import Button from '../Button/Button';
import { modalContext } from '../../utils/Context';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const openModal = useContext(modalContext);
  const navMobileRef = useRef(null);
  const [user, setUser] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
    });
  }, []);

  const handleOpenMenu = () => {
    navMobileRef.current.style.right = '0';
  };

  const handleCloseMenu = () => {
    navMobileRef.current.style.right = '-40vw';
  };

  const handleLogin = () => {
    openModal.dispatch({ type: 'open-login' });
    navMobileRef.current.style.right = '-40vw';
  };

  const handleLogout = () => {
    // eslint-disable-next-line no-undef
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navMobileRef.current.style.right = '-40vw';
        location.reload();
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  // Cari resep
  const handleSearchValue = (e) => {
    e.preventDefault();

    navigate(`/cari-resep/${searchValue}`, { replace: true });
    setSearchValue('');
    location.reload();
  };

  return (
    <nav>
      {/* Brand */}
      <div className="brand">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h3>Brand</h3>
        </Link>
      </div>

      {/* Search Box Mobile */}
      <form className="src-box-mobile" onSubmit={handleSearchValue}>
        <input
          type="text"
          placeholder="Cari Resep..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchIcon className="src-icon" onClick={handleSearchValue} />
      </form>

      {/* Ham Menu Mobile */}
      <MenuIcon className="ham-icon" onClick={handleOpenMenu} />

      {/* Nav List Mobile */}
      <div ref={navMobileRef} className="nav-list-mobile">
        <XIcon className="x-icon" onClick={handleCloseMenu} />
        <li>Resep</li>
        <li>Favorit</li>
        <li>Produk</li>
        <li>Artikel</li>
        {user ? (
          <div style={{ textAlign: 'center' }}>
            <Button type="button" text="Keluar" onClick={handleLogout} />
            <br />
            <br />
            <span style={{ marginRight: 10 }}>{user.email}</span>
          </div>
        ) : (
          <Button type="button" text="Masuk" onClick={handleLogin} />
        )}
      </div>

      {/* Nav List */}
      <ul className="nav-list">
        <li>Resep</li>
        <li>Favorit</li>
        <li>Produk</li>
        <li>Artikel</li>
      </ul>

      {/* Search Box & Login */}
      <div className="src-box-login">
        <form className="src-box" onSubmit={handleSearchValue}>
          <input
            type="text"
            placeholder="Cari Resep..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchIcon className="src-icon" onClick={handleSearchValue} />
        </form>

        {user ? (
          <div>
            <span style={{ marginRight: 10 }}>{user.email}</span>
            <Button type="button" text="Keluar" onClick={handleLogout} />
          </div>
        ) : (
          <Button type="button" text="Masuk" onClick={handleLogin} />
        )}
      </div>
    </nav>
  );
};

export default Header;
