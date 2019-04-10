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
  private recipesObs: Observable<Recipe[]>;
  private recipesList: Recipe[];
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  
  }

  loadRecipes():  void {


    this.recipeService.getRecipes().subscribe(
      resp => {
        this.recipesList = resp as Recipe[]; 
        console.log(this.recipesList);
      }
    );
  
  
}
}