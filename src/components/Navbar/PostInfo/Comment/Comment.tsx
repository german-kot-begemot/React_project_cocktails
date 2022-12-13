import React from 'react';
import styles from './Comment.module.scss';

const Comment = () => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="/images/postdetails/post1.1.jpg"
        alt=""
      />
      <h3>Chuck Norris</h3>
      <p>When God said, “Let there be light!” Chuck said, “Say Please.”</p>
      <span>Like</span>
    </div>
  );
};

export default Comment;
