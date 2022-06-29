import React, { useContext, useRef } from 'react';
import './Navbar.scss';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import Button from '../Button/Button';
import { modalContext } from '../../utils/Context';

const Header = () => {
  const openModal = useContext(modalContext);
  const navMobileRef = useRef(null);

  const handleOpenMenu = () => {
    navMobileRef.current.style.right = '0';
  };

  const handleCloseMenu = () => {
    navMobileRef.current.style.right = '-40vw';
  };

  return (
    <nav>
      {/* Brand */}
      <div className="brand">
        <h3>Brand</h3>
      </div>

      {/* Search Box Mobile */}
      <div className="src-box-mobile">
        <input type="text" placeholder="Cari Resep..." />
        <SearchIcon className="src-icon" />
      </div>

      {/* Ham Menu Mobile */}
      <MenuIcon className="ham-icon" onClick={handleOpenMenu} />

      {/* Nav List Mobile */}
      <div ref={navMobileRef} className="nav-list-mobile">
        <XIcon className="x-icon" onClick={handleCloseMenu} />
        <li>Resep</li>
        <li>Favorit</li>
        <li>Produk</li>
        <li>Artikel</li>
        <Button
          type="button"
          text="Masuk"
          onClick={() => openModal.dispatch({ type: 'open-login' })}
        />
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
        <div className="src-box">
          <input type="text" placeholder="Cari Resep..." />
          <SearchIcon className="src-icon" />
        </div>

        <Button
          type="button"
          text="Masuk"
          onClick={() => openModal.dispatch({ type: 'open-login' })}
        />
      </div>
    </nav>
  );
};

export default Header;
