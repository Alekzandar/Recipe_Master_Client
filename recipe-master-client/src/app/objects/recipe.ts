import { User } from './User';

export class Recipe {
    id: number;
    title: string;
    image: string;
    ingredients: string;
    likes: number;
    user: User;

}