import React, { createElement, useRef, useEffect } from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = () => {
  const newCommentRef = useRef<HTMLTextAreaElement>(null);

  const resetBtn = () => {
    if (newCommentRef.current?.value) {
      newCommentRef.current.value = '';
    }
  };

  const addComment = (event: any) => {
    event.preventDefault();
    if (newCommentRef.current !== null) {
      console.log(newCommentRef.current?.value);
      alert('Your comment has been published!');
      newCommentRef.current.value = '';
      console.log(newCommentRef.current.value);
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
          <button onClick={resetBtn} type="button">
            Reset
          </button>
          <button onClick={addComment} type="submit" data-testid="sbmt-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
