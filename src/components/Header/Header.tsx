import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.content}>
      <img src="/images/icon-friends.png" alt="bro" />
      <div>
        <h1>Coctails</h1>
      </div>
    </div>
  );
};

export default Header;
