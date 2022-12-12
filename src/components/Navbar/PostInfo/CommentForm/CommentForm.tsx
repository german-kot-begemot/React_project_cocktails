import React from 'react';
import styles from './CommentForm.module.scss';

const CommentForm = () => {
  return (
    <div>
      <label>
        <input type="textarea"></input>
        <button>Send</button>
      </label>
    </div>
  );
};

export default CommentForm;
