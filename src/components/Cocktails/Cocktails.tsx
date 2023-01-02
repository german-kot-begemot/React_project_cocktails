import React, { useEffect, useState } from 'react';
import styles from './Cocktails.module.scss';
import Card from './Card/Card';
import { cocktailsData } from '../../cocktailsData';
import { Cocktail } from '../../models/cocktailCard';
import { NavLink } from 'react-router-dom';
import { fetchAllCocktails } from '../../api';

const Cocktails = () => {
  const [cocktais, setCocktails] = useState<Cocktail[]>([]);
  // const [selected, setSelected] = useState('gin');
  console.log(cocktais);

  useEffect(() => {
    const fetchAll = async () => {
      const cards = await fetchAllCocktails();
      setCocktails(cards);
    };
    fetchAll();
  }, []);

  return (
    <div className={styles.cardHolder}>
      {cocktais.map((cocktail) => (
        <NavLink
          key={cocktail.id}
          to={`/cocktails/carddetails`}
          className={styles.link}
        >
          <Card
            key={cocktail.id}
            id={cocktail.id}
            name={cocktail.name}
            recipe={cocktail.recipe}
            imageUrl={cocktail.imageUrl}
            ingredients={cocktail.ingredients}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Cocktails;
