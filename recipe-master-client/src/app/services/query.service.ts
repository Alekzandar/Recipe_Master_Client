import { Recipe } from './../objects/recipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const recipeHeaders = {
  headers: new HttpHeaders({
    "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "7b8987c75emsh31f353e878d74e2p1e424fjsn5ffa201e13e5"
  })
};

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) { }

 


  getRecipes(recipeUrl) {
    console.log("IN SERVICE :" + recipeUrl + " with headers: " + recipeHeaders);
    return this.http.get<Recipe[]>(recipeUrl, recipeHeaders);
      
  }
}
