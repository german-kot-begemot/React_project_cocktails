import React from 'react';
import styles from './Coctails.module.scss';

const Coctails = () => {
  return (
    <div className={styles.coctailContent}>
      <div className={styles.coctailTopPic}>
        <img src="images/whisky-3638148_960_720.jpg" alt="" />
      </div>

      <div className={styles.cocktail}>
        <div className={styles.cocktailPic}>
          <img src="images/cuba-libre-1184268_960_720.jpg" alt="" />
        </div>
        <div className={styles.cocktailDescription}>
          <h2>Cuba Libre</h2>
          <ul>
            <li>5 cl of white rum</li>
            <li>10 cl of cola (not Coke)</li>
            <li>1 cl of lime juice</li>
            <li>lime wedge</li>
          </ul>
          <p>
            The recipe is basic and the drink is prepared directly in a highball
            glass, so you won’t need any particular equipment or skill. Squeeze
            a lime and strain juice. Fill a glass with ice and pour rum and lime
            juice. Add cola, cut a wedge of lime, decorate with a slice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coctails;
