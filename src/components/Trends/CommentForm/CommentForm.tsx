import React, { useState, useEffect } from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = ({
  onSubmit,
}: {
  onSubmit: (comment: { name: string; text: string }) => void;
}) => {
  const [userName, setUserName] = useState('');
  const [textComment, setTextComment] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isTextCommentValid, setIsTextCommentValid] = useState(true);

  const reset = () => {
    setTextComment('');
    setUserName('');
    setIsNameValid(true);
    setIsTextCommentValid(true);
  };

  const validate = () => {
    if (textComment == '') {
      setIsTextCommentValid(false);
    }
    if (userName == '') {
      setIsNameValid(false);
    }
    return textComment !== '' && userName !== '';
  };

  const getNameValue = (event: any) => {
    event.preventDefault();
    setUserName(event.target.value);
    if (event.target.value !== '') {
      setIsNameValid(true);
    }
  };

  const getCommentValue = (event: any) => {
    event.preventDefault();
    setTextComment(event.target.value);
    if (event.target.value !== '') {
      setIsTextCommentValid(true);
    }
  };

  const onClick = (event: any) => {
    event.preventDefault();
    const isValid = validate();

    if (isValid) {
      onSubmit({ name: userName, text: textComment });
      reset();
    }
  };

  return (
    <div className={styles.form}>
      <form action="/">
        <input
          name="userName"
          type="text"
          value={userName}
          data-testid="user-name-input"
          placeholder="Insert your Name"
          className={styles.input}
          onChange={getNameValue}
        ></input>
        {!isNameValid && (
          <span className={styles.relativeSpan}>
            <p className={styles.required}>Name is required</p>
          </span>
        )}
        <textarea
          name="comment"
          placeholder="Insert your Comment"
          value={textComment}
          data-testid="user-comment-textarea"
          className={styles.textarea}
          onChange={getCommentValue}
        ></textarea>
        {!isTextCommentValid && (
          <span className={styles.relativeSpan}>
            <p className={styles.required}>Name is required</p>
          </span>
        )}
        <div className={styles.btnHolder}>
          <button type="button" onClick={reset}>
            Reset
          </button>
          <button type="submit" data-testid="sbmt-btn" onClick={onClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
