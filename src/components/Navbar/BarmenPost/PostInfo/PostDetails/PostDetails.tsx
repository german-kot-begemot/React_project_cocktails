import React from 'react';
import styles from './PostDetails.module.scss';
import Comment from '../Comment/Comment';

const PostDetails = () => {
  return (
    <div>
      <img src="#" alt="" />
      <h1>Post name</h1>
      <p>The post details bla-bla-bla</p>
      <p>Like</p>
      <Comment />
    </div>
  );
};

export default PostDetails;
