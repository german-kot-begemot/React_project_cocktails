import React from 'react';
import styles from './Comment.module.scss';

const Comment = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="/images/postdetails/post1.1.jpg"
        alt="ava"
      />
      <h3>{name}</h3>
      <p>{text}</p>
      <span>Like</span>
    </div>
  );
};

export default Comment;
