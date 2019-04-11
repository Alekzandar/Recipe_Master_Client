import { RandomRecipe } from './../objects/randomrecipe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const randRecipeHeaders = {
    headers: new HttpHeaders({
      "X-RapidAPI-Host" : "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "e734183feemshfb93d60012130d4p11d777jsn067161194dbe"
    })
  };
  
  @Injectable({
    providedIn: 'root'
  })
  export class RandomRecipeService {
  
    constructor(private http: HttpClient) { }
  
    randRecipeUrl = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1&tags=vegetarian%2Cdessert';
  
  
    getRandomRecipe() {
      return this.http.get<RandomRecipe[]>(this.randRecipeUrl, randRecipeHeaders);
        
    }
  }