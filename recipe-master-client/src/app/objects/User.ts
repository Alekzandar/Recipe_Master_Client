import { Recipe } from './recipe';

export class User{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    savedRecipes: Recipe[];
    ErrorText:string;
}
