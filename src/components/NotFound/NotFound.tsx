import React from 'react';
import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div data-testid="notFound">
      <img
        src="images/notfound/not_found.jpg"
        className={styles.notFound}
        alt="notFound"
      />
    </div>
  );
}

export default NotFound;
