import { Component, OnInit } from '@angular/core';
import { DetailService } from './../services/detail.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(private detailService: DetailService) { }
	private id: string = '289101';

	private recipe;
	private recipeTitle;
	private recipeImage;
	private recipeServings;
	private recipeCheap;
	private recipeKey;
	private recipeEntries;
	private vegan;
	private vegetarian;
	private dairyFree;
	private glutenFree;
	private prepTime;
	private extendedNames;
	private IList = [];
	private extendedIngredientsName = [];
	private recipeDirection;
	private ketogenic;
	private ppServing;


	getDetails(){
		this.detailService.getObject(this.id).subscribe(
			resp => {
				//console.log(resp+"GOT RESPONSE");
/*				this.recipeKey = Object.keys(resp);
				console.log(this.recipeKey);
				this.recipe = Object.values(resp);
				console.log(this.recipe);*/
				this.recipeEntries = resp;
				//console.log(this.recipeEntries);
/*				Object.entries(this.recipeEntries.extendedIngredients).forEach(key=>
				{ console.log(key.names); })*/
				Object.entries(this.recipeEntries.extendedIngredients).forEach(
					([key, value]) => /*console.log(Object.values(value)[4]) ingredient names only*/
						this.extendedIngredientsName.push(Object.values(value)[5])
				);
				//console.log(this.extendedIngredientsName);
				this.recipeTitle = this.recipeEntries.title;
				//console.log(this.recipeTitle);
				this.recipeCheap = this.recipeEntries.cheap;
				//console.log(this.recipeCheap);
				this.recipeImage = this.recipeEntries.image;
				//console.log(this.recipeImage);
				this.recipeServings = this.recipeEntries.servings;
				//console.log(this.recipeServings);
				this.recipeDirection = this.recipeEntries.instructions;
				//console.log(this.recipeDirection);
				this.vegan = this.recipeEntries.vegan;
				//console.log(this.vegan);
				this.vegetarian = this.recipeEntries.vegatarian;
				this.prepTime = this.recipeEntries.readyInMinutes;
				this.dairyFree = this.recipeEntries.dairyFree;
				//console.log(this.dairyFree);
				this.glutenFree = this.recipeEntries.glutenFree;
				this.ketogenic = this.recipeEntries.ketogenic;
				this.ppServing = this.recipeEntries.pricePerServing;
/*				this.recipeImage = this.recipeEntries.extendedIngredients[0].name;
				console.log(this.recipeImage);
				this.extendedIngredients = this.recipeEntries.extendedIngredients;
				console.log(Object.values(this.extendedIngredients));*/
/*				for (var i in Object.entries(this.recipeEntries.extendedIngredients)) {
					console.log(i);
				}*/

				return "Success";
			})
	}
  ngOnInit() {
  }

}
