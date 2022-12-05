import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header-content">
      <img src="images/icon-friends.png" alt="logo-header" />
      <div>
        <h1>Coctails</h1>
      </div>
      <div className="contacts">
        <a className="phone" href="tel:+74951234567">
          +7 (495) 123-45-67
        </a>
      </div>
    </div>
  );
};

export default Header;
