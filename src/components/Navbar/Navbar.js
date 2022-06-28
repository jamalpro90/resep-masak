import React from 'react';
import './Navbar.scss';
import { SearchIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <nav>
      {/* Brand */}
      <div className="brand">
        <h3>Brand</h3>
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

        <button>Masuk</button>
      </div>
    </nav>
  );
};

export default Header;
