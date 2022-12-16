import React, { createElement, useRef, useEffect } from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = () => {
  const newCommentRef = useRef<HTMLTextAreaElement>(null);
  const addComment = () => {
    if (newCommentRef.current !== null) {
      const text = newCommentRef.current.value;
      console.log(text);
    }
  };

  return (
    <div className={styles.form}>
      <form action="/">
        <label htmlFor="comment"></label>
        <textarea
          ref={newCommentRef}
          name="comment"
          placeholder="Insert your Comment"
        ></textarea>
        <div className={styles.btnHolder}>
          <button type="button">Reset</button>
          <button onClick={addComment} type="submit" data-testid="sbmt-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
