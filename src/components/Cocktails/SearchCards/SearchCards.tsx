import React, { useState } from 'react';
import styles from './SearchCards.module.scss';

export type SearchProps = {
  onSearch: (query: string) => void;
};

const SearchCards = ({ onSearch }: SearchProps) => {
  const [searchTitle, setSearchTitle] = useState('');

  const filter = () => {
    onSearch(searchTitle);
    setSearchTitle('');
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      filter();
    }
  };

  return (
    <div className={styles.search} data-testid="search">
      <input
        type="search"
        placeholder="Search"
        autoComplete="off"
        value={searchTitle}
        onChange={(event) => {
          setSearchTitle(event.target.value);
        }}
        onKeyDown={keyDownHandler}
      />
      <button type="button" className={styles.searchBtn} onClick={filter}>
        <img
          src="images/cocktail-searchpng.png"
          className={styles.iconSearch}
        />
      </button>
    </div>
  );
};

export default SearchCards;
