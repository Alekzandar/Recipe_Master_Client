import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../objects/recipe';

@Injectable({
  providedIn: 'root'
})
export class UserRecipesService {
  private userRecipesUrl = 'http://localhost:8085/recipe-master/user/id/'

  constructor(private http: HttpClient) { }

  getUserRecipes(userId: string) {
    console.log("IN SERVICE :" + this.userRecipesUrl + " for User: " + userId);
    return this.http.get<Recipe[]>(this.userRecipesUrl+userId);
  }
}
