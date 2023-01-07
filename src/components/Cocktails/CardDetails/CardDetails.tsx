import React, { useEffect, useState } from 'react';
import styles from './CardDetails.module.scss';
import { findById } from '../../../api';
import { useParams } from 'react-router-dom';
import { Cocktail } from '../../../models/cocktailCard';

const CardDetails = () => {
  const params = useParams();
  const [coct, setCoct] = useState<Cocktail | null>(null);

  useEffect(() => {
    const getCoc = async () => {
      const cocktail = await findById(params.id ?? '');

      console.log(cocktail);
      setCoct(cocktail);
    };

    getCoc();
    //fetch cocktail
  }, []);

  console.log(params);
  return (
    <div className={styles.item}>
      <img src="/images/cocktails/drink-aperol.jpg" alt="" />
      <h1></h1>
      <p>
        According to one version, spritz appeared in Venice in the middle of the
        XIX century at a time when Venice was part of the Austrian Empire, was
        invented by the Austrian military and was originally a mixture of wine
        and sparkling water.
      </p>
      <h2>Ingridients:</h2>
      <ul>
        <li>Aperitif Aperol 60 ml;</li>
        <li>Dry sparkling wine (champagne)120 ml;</li>
        <li>Carbonated water 20 ml;</li>
        <li>Orange 1 layer;</li>
        <li>Ice cubes;</li>
      </ul>
      <h2>How to cook:</h2>
      <ul>
        <li>Fill a wine glass with ice cubes to the top.</li>
        <li>
          Pour 60 ml of aperitif aperol, 20 ml of sparkling water and 120 dry
          sparkling wine.
        </li>
        <li>Mix gently with a bar spoon.</li>
        <li>Put a slice of orange in a glass.</li>
      </ul>
      <h2>Intresting facts :</h2>
      <ul>
        <li>
          The name Spritz (Spritz) most likely came from the German spritzen
          (splash). The same word is associated with soda, which is
          traditionally added to an Aperol Syringe.
        </li>
        <li>
          Aperol Syringe is considered a native of Italy, although Austria
          disputes the right to call it its own.
        </li>
        <li>
          In one of the old advertising campaigns of the aperitif, the
          manufacturer claimed that the Aperol helps ladies keep slim.
        </li>
      </ul>
      <h2>Prost!</h2>
    </div>
  );
};

export default CardDetails;
