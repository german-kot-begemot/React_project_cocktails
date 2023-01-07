import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Cocktail } from './models/cocktailCard';

type IngredientKey = `strIngredient${number}`;
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
  [ingredientKey: IngredientKey]: string | null;
  [measureKey: MeasureKey]: string | null;
  strImageSource: null;
  strImageAttribution: null;
  strCreativeCommonsConfirmed: 'No';
  dateModified: '2017-09-07 21:42:09';
}

const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function fetchAllCocktails(): Promise<Cocktail[]> {
  const url = `${cocktailsUrl}/search.php?s=`;
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

export async function findByTitle(query: string): Promise<Cocktail[]> {
  const url = `${cocktailsUrl}/search.php?s=${query}`;

  try {
    const response = await axios.get<{ drinks: CocktailDto[] | null }>(url);
    console.log('Response: ', response.data);
    return (
      response.data.drinks?.map((cocktailDto) => {
        const cocktail = {
          id: cocktailDto.idDrink,
          name: cocktailDto.strDrink,
          imageUrl: cocktailDto.strDrinkThumb,
          recipe: cocktailDto.strInstructions,
          ingredients: {},
        };
        return cocktail;
      }) || []
    );
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
}

export async function findById(id: string): Promise<Cocktail | null> {
  const url = `${cocktailsUrl}/lookup.php?i=${id}`;

  try {
    const response = await axios.get<{ drinks: CocktailDto[] | null }>(url);
    console.log('Response: ', response.data);
    const all =
      response.data.drinks?.map((cocktailDto) => {
        const cocktail = {
          id: cocktailDto.idDrink,
          name: cocktailDto.strDrink,
          imageUrl: cocktailDto.strDrinkThumb,
          recipe: cocktailDto.strInstructions,
          ingredients: {},
        };
        return cocktail;
      }) || [];

    return all[0] ?? null;
  } catch (error: unknown) {
    console.log(error);
    return null;
  }
}
