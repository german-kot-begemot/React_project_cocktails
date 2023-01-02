import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Cocktail } from './models/cocktailCard';

type IngridientKey = `strIngredient${number}`;
type MeasureKey = `strMeasure${number}`;

export interface CocktailDto {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: null;
  strTags: null;
  strVideo: null;
  strCategory: 'Cocktail';
  strIBA: null;
  strAlcoholic: 'Alcoholic';
  strGlass: 'Cocktail glass';
  strInstructions: string;
  strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg';
  [ingridientKey: IngridientKey]: string | null;
  [measureKey: MeasureKey]: string | null;
  strImageSource: null;
  strImageAttribution: null;
  strCreativeCommonsConfirmed: 'No';
  dateModified: '2017-09-07 21:42:09';
}

// export interface CocktailDto {
//   [key: string]: any;
// }

const cocktailsUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function fetchAllCocktails(): Promise<Cocktail[]> {
  const url = `${cocktailsUrl}`;
  try {
    const response = await axios.get<{ drinks: CocktailDto[] }>(url);
    console.log('Response: ', response.data);
    return response.data.drinks.map((cocktailDto) => {
      const cocktail = {
        id: cocktailDto.idDrink,
        name: cocktailDto.strDrink,
        imageUrl: cocktailDto.strDrinkThumb,
        recipe: cocktailDto.strInstructions,
        ingredients: {},
      };

      return cocktail;
    });
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
}
