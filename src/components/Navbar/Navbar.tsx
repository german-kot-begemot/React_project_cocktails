import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <NavLink className={styles.home} to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.cocktails} to="/cocktails" end>
            Coctails
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.trends} to="/trends" end>
            Trends
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.humor} to="/humor" end>
            Humor
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.myBar} to="/mybar" end>
            My Bar
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
