import React, { useRef } from 'react';
import './Navbar.scss';
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
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
        <input type="text" name="" id="" />
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
        <button className="btn-login">Masuk</button>
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
          <input type="text" name="" id="" />
          <SearchIcon className="src-icon" />
        </div>

        <button className="btn-login">Masuk</button>
      </div>
    </nav>
  );
};

export default Header;
