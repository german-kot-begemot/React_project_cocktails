import React from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './BarmenPost.module.scss';
import Post from './Post/Post';

const BarmenPost = () => {
  return (
    <div>
      <div></div>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default BarmenPost;
