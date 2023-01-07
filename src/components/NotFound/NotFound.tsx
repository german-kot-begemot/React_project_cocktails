import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div data-testid={styles.notFound}>
      {/* <div>
        <div className={styles.starsec}></div>;
        <div className={styles.starthird}></div>;
        <div className={styles.starfourth}></div>;
        <div className={styles.starfifth}></div>;
      </div>; */}

      <div className={styles.lamp__wrap}>
        <div className={styles.lamp}>
          <div className={styles.cable}></div>
          <div className={styles.cover}></div>
          <div className={styles.inCover}>
            <div className={styles.bulb}></div>
          </div>
          <div className={styles.light}></div>
        </div>
      </div>

      <section className={styles.error}>
        <div className={styles.errorContent}>
          <div className={styles.errorMessage}>
            <h1 className={styles.messageTitle}> Not Found </h1>
            <p className={styles.messageText}>
              Dude, call the Barman at least!
            </p>
          </div>
        </div>
      </section>

      {/* <img
        src={styles.images/notfound/not_found.jpg{styles.
        className={styles.notFound}
        alt={styles.notFound{styles.
      /> */}
    </div>
  );
}

export default NotFound;
