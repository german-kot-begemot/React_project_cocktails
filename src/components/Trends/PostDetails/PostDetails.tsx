import React, { useState } from 'react';
import styles from './PostDetails.module.scss';
import Comment from '../Comment/Comment';
import { Commentary as CommentInterface } from '../../../models/comment';
import CommentForm from '../CommentForm/CommentForm';

const PostDetails = () => {
  const [comments, setComments] = useState<CommentInterface[]>([]);

  const onCommentAdd = (comment: { name: string; text: string }) => {
    setComments(comments.concat({ ...comment, id: Math.random() }));
  };

  return (
    <div className={styles.item}>
      <img src="images/postdetails/post1.jpg" alt="" />
      <h1>ColaWeizen und andere Möglichkeiten, Bier mit Cola zu trinken</h1>
      <p>
        It is believed that German teenagers were the first to mix beer with
        Coca Cola at parties. By trial and error, the Germans have identified
        the beers that are best combined with cola. This is how the Kolavaitzen
        cocktail, popular in Germany, appeared, which can now be ordered even in
        local bars. There are other recipes for cola with beer. Composition and
        proportions:
      </p>
      <ul>
        <li>wheat beer - 100 ml;</li>
        <li>cola - 25-100 ml</li>
      </ul>
      <p>
        The proportions of cola can be changed at your discretion, 1:1 is
        considered a classic, but if you want to catch the malt notes of beer,
        it is better to take less soda - 25-50% of the amount of beer. The brand
        of beer does not matter in principle, after mixing with cola, the unique
        flavor profile will be absorbed by the syrup. The difference between
        Coca-Cola and Pepsi is also not noticeable. Recipe 1. Pour beer into a
        beer glass, wait until the foam settles. 2. Add Cola in a thin stream.
        Do not shake or stir, otherwise the cocktail will splash out from the
        glass. Drink in small sips.
      </p>
      <p className={styles.like}>Like</p>
      <div className={styles.CommentForm}>
        <CommentForm onSubmit={(comment) => onCommentAdd(comment)} />
      </div>
      <div className={styles.CommentsHolder}>
        {comments.map((comment) => (
          <Comment key={comment.id} name={comment.name} text={comment.text} />
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
