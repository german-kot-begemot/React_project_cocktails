import React from 'react';
import styles from './Card.module.scss';
import { Cocktail } from '../../../../cocktailCard';

const Card = (props: Cocktail) => {
  return (
    <div className={styles.card} data-testid="card">
      <div className={styles.cocktailPhoto}>
        <img src={props.imageUrl} alt="pic" />
      </div>
      <div className={styles.cocktailName}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default Card;
