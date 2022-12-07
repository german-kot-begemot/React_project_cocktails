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
          <NavLink className={styles.about} to="/coctails" end>
            Coctails
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.barmenPost} to="/form" end>
            BarmenPost
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.barMusic} to="/form" end>
            BarMusic
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.news} to="/news" end>
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.profile} to="/form" end>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.settings} to="/form" end>
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

{
  /*  */
}
{
  /* <Route path="*" element={<NotFound />} /> */
}
