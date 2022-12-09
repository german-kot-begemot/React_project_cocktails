import React from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.header}>
      <blockquote>
        People mix cocktails, and cocktails mix <span>people</span>
      </blockquote>
    </div>
  );
};

export default Home;
