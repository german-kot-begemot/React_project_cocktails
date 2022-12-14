import React from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <div className={styles.form}>
      <form action="/">
        <label htmlFor="comment"></label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Insert your Comment"
        ></textarea>
        <div className={styles.btnHolder}>
          <button type="button">Reset</button>
          <button type="submit" data-testid="sbmt-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
