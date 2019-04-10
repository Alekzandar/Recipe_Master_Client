import { Recipe } from './../objects/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const recipeHeaders = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "653c9ff2demsh033c83b0a49033ep1855d1jsnaebe6c7b70e9"
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar';


  getRecipes() {
    return this.http.get<Recipe[]>(this.recipeUrl, recipeHeaders);
      
  }
}
