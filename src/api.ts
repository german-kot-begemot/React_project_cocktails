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
  strCategory: string;
  strIBA: null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [ingredientKey: IngredientKey]: string | null;
  [measureKey: MeasureKey]: string | null;
  strImageSource: null;
  strImageAttribution: null;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

const cocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1';
const getIngredients = (data: CocktailDto) => {
  const result: { [key: string]: string | null } = {};
  Object.entries(data).forEach(([key, value]) => {
    if (key.startsWith('strIngredient') && value !== null) {
      console.log(key, value);
      const num = Number(key.match(/\d+/)?.[0]);
      result[value] = data[`strMeasure${num}`];
    }
  });
  console.log(result);
  return result;
};

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
          ingredients: getIngredients(cocktailDto),
        };
        return cocktail;
      }) || [];

    return all[0] ?? null;
  } catch (error: unknown) {
    console.log(error);
    return null;
  }
}
