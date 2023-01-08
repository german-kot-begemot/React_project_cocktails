import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { findById } from '../../../api';
import { useParams } from 'react-router-dom';
import { Cocktail } from '../../../models/cocktailCard';
import Cocktails from '../Cocktails';
import { cocktailsData } from '../../../cocktailsData';

const CardDetails = () => {
  const params = useParams();
  const [coct, setCoct] = useState<Cocktail | null>(null);

  useEffect(() => {
    const getCoc = async () => {
      const cocktail = await findById(params.id ?? '');

      // console.log(cocktail);
      setCoct(cocktail);
    };

    getCoc();
  }, []);

  console.log(coct);
  if (coct === null) {
    return null;
  }

  return (
    <div className={styles.item}>
      <h1 className={styles.focusHeader}>{coct.name}</h1>
      <img src={coct.imageUrl} />
      <h2>Ingredients:</h2>

      <ul>
        {Object.entries(coct.ingredients).map(([ingredient, amount]) => (
          <li key={ingredient}>
            {ingredient}: {amount ?? 'Add to taste'}
          </li>
        ))}
      </ul>
      <h2>How to cook:</h2>
      <p>{coct.recipe}</p>

      <h2>Prost!</h2>
    </div>
  );
};

export default CardDetails;
