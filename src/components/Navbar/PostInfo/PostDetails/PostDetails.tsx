import React from 'react';
import styles from './PostDetails.module.scss';
import Comment from '../Comment/Comment';

const PostDetails = () => {
  return (
    <div>
      <img src="images/postdetails/post1.jpg" alt="" />
      <h1>ColaWeizen und andere Möglichkeiten, Bier mit Cola zu trinken</h1>
      <p>
        It is believed that German teenagers were the first to mix beer with
        Coca Cola at parties. By trial and error, the Germans have identified
        the beers that are best combined with cola. This is how the Kolavaitzen
        cocktail, popular in Germany, appeared, which can now be ordered even in
        local bars. There are other recipes for cola with beer.
      </p>
      <p>Like</p>
      <Comment />
    </div>
  );
};

export default PostDetails;
