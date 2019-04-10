import { RecipeService } from './../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../objects/recipe';
import { of } from 'rxjs';

@Component({
  selector: 'app-aleksandar-view',
  templateUrl: './aleksandar-view.component.html',
  styleUrls: ['./aleksandar-view.component.css']
})


export class AleksandarViewComponent implements OnInit {
  recipesList: Observable<Recipe[]>;
  private respRecipes;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes().subscribe(
      (data) => {
        this.recipesList = of(data); // WORKS AND ALWAYS UP TO DATE
        console.log(this.recipesList); // ONLY WORKS ONCE
      }
    );
   // let headers = new HttpHeaders();
   // headers = headers.set('X-RapidAPI-Host', 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com').set('X-RapidAPI-Key','653c9ff2demsh033c83b0a49033ep1855d1jsnaebe6c7b70e9');
  
  }

  loadRecipes():  Observable<Recipe[]> {
    return this.recipeService.getRecipes();
  }
  
}
