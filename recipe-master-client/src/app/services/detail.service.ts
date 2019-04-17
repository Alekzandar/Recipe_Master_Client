import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const recipeHeaders = {
	headers: new HttpHeaders({
		"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"X-RapidAPI-Key": "ba20522a8bmsh98aab5904abaa22p14af16jsnb5c9751735fc"
	})
};

@Injectable({
  providedIn: 'root'
})



export class DetailService {
	private recipeUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/';
	private information: string = '/information';

  constructor(private http: HttpClient) {}

  getObject(id){
	  console.log((this.recipeUrl + id + this.information, recipeHeaders));
	  return this.http.get(this.recipeUrl + id + this.information, recipeHeaders);

  }
}
