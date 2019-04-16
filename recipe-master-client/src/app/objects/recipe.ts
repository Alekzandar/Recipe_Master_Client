import { User } from './User';

export class Recipe {
    id: number;
    title: string;
    image: string;
    usedIngredientCount: number;
    missedIngredientCount: number;
    missedIngredients;
    usedIngredients;
    likes: number;
    user: User;

}