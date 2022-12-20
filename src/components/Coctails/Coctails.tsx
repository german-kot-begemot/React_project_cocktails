import React from 'react';
import styles from './Coctails.module.scss';
import Card from './Card/Card';
import { cocktailsData } from '../../cocktailsData';
import { NavLink } from 'react-router-dom';

const Coctails = () => {
  return (
    <div className={styles.cardHolder}>
      {cocktailsData.map((cocktail) => (
        <NavLink key={cocktail.id} to={`/coctails/carddetails`}>
          <Card
            id={cocktail.id}
            name={cocktail.name}
            recipe={cocktail.recipe}
            imageUrl={cocktail.imageUrl}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Coctails;

// const [items, setItems] = useState<Cocktail[]>([]);

// const Coctails = () => {
//   return (
//     <div className={styles.cardHolder}>
//       {cocktailsData.map((cocktail) => (
//         <Card
//           id={cocktail.id}
//           key={cocktail.id}
//           name={cocktail.name}
//           recipe={cocktail.recipe}
//           imageUrl={cocktail.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };
