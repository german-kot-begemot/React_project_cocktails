import React from 'react';
import styles from './Post.module.scss';

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="images/postdetails/post1.jpg" alt="pic" />
      <h2>ColaWeizen und andere Möglichkeiten, Bier mit Cola zu trinken</h2>
      <p>
        It is believed that German teenagers were the first to mix beer with
        Coca Cola at parties. By trial and error, the Germans have identified
        the beers that are best combined with cola.This is how the Kolavaitzen
        cocktail, popular in Germany, appeared, which can now be ordered even in
        local bars. There are other recipes for cola with beer.
      </p>
      <span>Like</span>
    </div>
  );
};

export default Post;
