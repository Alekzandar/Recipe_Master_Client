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
export class QueryService {
  private serverRecipeUrl = 'http://localhost:8085/recipe-master/recipe'

  constructor(private http: HttpClient) { }

 


  getRecipes(recipeUrl) {
    console.log("IN SERVICE :" + recipeUrl + " with headers: " + recipeHeaders);
    return this.http.get<Recipe[]>(recipeUrl, recipeHeaders);
  }

  postRecipes(faveRecipes){
    console.log("IN SERVICE TO SEND FAVE RECIPES: " + faveRecipes);
    return this.http.post<Recipe[]>(this.serverRecipeUrl, faveRecipes);

  }
}
