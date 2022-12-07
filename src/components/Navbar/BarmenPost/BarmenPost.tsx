import React from 'react';
// import { NavLink } from 'react-router-dom';
import styles from './BarmenPost.module.scss';

const BarmenPost = () => {
  return (
    <div className={styles.posts}>
      <div className={styles.post}>
        <h1>Post 1</h1>
        <p>gggggggggggggggggggg</p>
        <div className={styles.comments}>
          <h2>Your comment</h2>
          <label>
            <input type="textarea"></input>
            <button>Send</button>
          </label>
          <div className={styles.comment}>Klingt gut!</div>
          <div className={styles.comment}>Klingt nicht gut!</div>
        </div>
        <div className={styles.answer}>Na alles klar!</div>
      </div>
    </div>
  );
};

export default BarmenPost;
