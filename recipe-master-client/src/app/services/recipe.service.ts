import { Recipe } from './../objects/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JackyViewComponent } from './../jacky-view/jacky-view.component';



const recipeHeaders = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "7b8987c75emsh31f353e878d74e2p1e424fjsn5ffa201e13e5"+null
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  /*names: string;*/

  recipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients='+this.names;


  getRecipes() {
    return this.http.get<Recipe[]>(this.recipeUrl, recipeHeaders);
      
  }
}
