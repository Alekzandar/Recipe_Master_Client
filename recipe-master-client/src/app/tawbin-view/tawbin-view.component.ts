import { RandomRecipeService } from './../services/random-recipe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomRecipe } from '../objects/randomrecipe';
import { of } from 'rxjs';

@Component({
  selector: 'app-tawbin-view',
  templateUrl: './tawbin-view.component.html',
  styleUrls: ['./tawbin-view.component.css']
})

export class TawbinViewComponent implements OnInit {
  private randRecipeObs: Observable <RandomRecipe[]>;
  private randRecipeResponse: RandomRecipe[];
  private randRecipeList: RandomRecipe[];


  constructor(private randRecipeService: RandomRecipeService) { }

  ngOnInit() {
  }

  loadRandomRecipes():  void {


    this.randRecipeService.getRandomRecipe().subscribe(
      resp => {
        this.randRecipeResponse = resp as RandomRecipe[]; 
        //Cast as an array
        this.randRecipeList = Object.values(this.randRecipeResponse);
        console.log(this.randRecipeList);
        console.log(this.randRecipeList[0][0].title);

        //this.myJson = JSON.stringify(this.randRecipeList);
        //console.log("JSON: " + this.myJson);
        //console.log("Recipe Title" + this.myJson.title);

      }
    );

}
}
