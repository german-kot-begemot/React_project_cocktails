import React from 'react';
import styles from './Post.module.scss';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="#" alt="" />
      <p>Post 1</p>
      <span>Like</span>
    </div>
  );
};

export default Post;
