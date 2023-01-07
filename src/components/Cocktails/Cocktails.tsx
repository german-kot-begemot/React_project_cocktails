import React, { useEffect, useState } from 'react';
import styles from './Cocktails.module.scss';
import Card from './Card/Card';
import { Cocktail } from '../../models/cocktailCard';
import { NavLink } from 'react-router-dom';
import { fetchAllCocktails, findByTitle } from '../../api';
import SearchCards from './SearchCards/SearchCards';

const Cocktails = () => {
  const [cocktais, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    const fetchAll = async () => {
      const cards = await fetchAllCocktails();
      setCocktails(cards);
    };
    fetchAll();
  }, []);

  const searchByTitle = async (title: string) => {
    const cards = await findByTitle(title);
    setCocktails(cards);
  };

  if (cocktais.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <SearchCards onSearch={searchByTitle} />
        </div>
        <div className={styles.cardHolder}>
          <p>nothing found,bro</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <SearchCards onSearch={searchByTitle} />
      </div>
      <div className={styles.cardHolder}>
        {cocktais.map((cocktail) => (
          <NavLink
            key={cocktail.id}
            to={`/cocktails/${cocktail.id}`}
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
    </div>
  );
};

export default Cocktails;
