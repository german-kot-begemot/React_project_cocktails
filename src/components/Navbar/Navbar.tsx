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
          <NavLink className={styles.coctails} to="/coctails" end>
            Coctails
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.barmenPost} to="/barmenposts" end>
            Barmen Post
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.barMusic} to="/barmusic" end>
            Bar Music
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.news} to="/news" end>
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.profile} to="/profile" end>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.settings} to="/settings" end>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
