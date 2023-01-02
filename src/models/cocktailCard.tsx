export interface Cocktail {
  id: string;
  name: string;
  recipe: string;
  imageUrl: string;
  ingredients: { [key: string]: string };
}
