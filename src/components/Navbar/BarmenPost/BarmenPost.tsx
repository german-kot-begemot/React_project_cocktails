import React from 'react';
import { NavLink } from 'react-router-dom';
// import PostDetails from '../PostInfo/PostDetails/PostDetails';
import styles from './BarmenPost.module.scss';
import Post from './Post/Post';

const BarmenPost = () => {
  return (
    <div>
      <div></div>
      <div className={styles.posts}>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
        <NavLink to="/barmenpost/postdetails" end>
          <Post />
        </NavLink>
      </div>
    </div>
  );
};

export default BarmenPost;
