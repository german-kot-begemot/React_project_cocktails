import React from 'react';
import { NavLink } from 'react-router-dom';
// import PostDetails from '../PostInfo/PostDetails/PostDetails';
import styles from './Trends.module.scss';
import Post from './Post/Post';

const Trends = () => {
  return (
    <div>
      <div></div>
      <div className={styles.posts}>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/trends/postdetails" end>
          <Post />
        </NavLink>
      </div>
    </div>
  );
};

export default Trends;
