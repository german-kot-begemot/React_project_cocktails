import React from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Home from '../../components/Navbar/Home/Home';
import Coctails from '../../components/Navbar/Coctails/Coctails';
import BarmenPost from '../../components/Navbar/BarmenPost/BarmenPost';
import BarMusic from '../../components/Navbar/BarMusic/BarMusic';
import News from '../../components/Navbar/News/News';
import Profile from '../../components/Navbar/Profile/Profile';
import Settings from '../../components/Navbar/Settings/Settings';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Home />
        </li>
        <li>
          <Coctails />
        </li>
        <li>
          <BarmenPost />
        </li>
        <li>
          <BarMusic />
        </li>
        <li>
          <News />
        </li>
        <li>
          <Profile />
        </li>
        <li>
          <Settings />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
