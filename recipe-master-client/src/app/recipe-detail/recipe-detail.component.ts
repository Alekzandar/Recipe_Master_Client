import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailService } from './../services/detail.service';
import { UserDashComponent } from '../user-dash/user-dash.component';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
	constructor(private detailService: DetailService, private data: DataService, public activatedRoute: ActivatedRoute) { }
	
	private recipeId;

	private id: string = '479101';

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


	getDetails() {
		this.detailService.getObject(this.id).subscribe(
			resp => {
				console.log(resp + "GOT RESPONSE");
				/*				this.recipeKey = Object.keys(resp);
								console.log(this.recipeKey);
								this.recipe = Object.values(resp);
								console.log(this.recipe);*/
				this.recipeEntries = resp;
				console.log(this.recipeEntries);
				/*				Object.entries(this.recipeEntries.extendedIngredients).forEach(key=>
								{ console.log(key.names); })*/
				Object.entries(this.recipeEntries.extendedIngredients).forEach(
					([key, value]) => /*console.log(Object.values(value)[4])*/
						this.extendedIngredientsName.push(Object.values(value)[4])
				);
				console.log(this.extendedIngredientsName);
				this.recipeTitle = this.recipeEntries.title;
				console.log(this.recipeTitle);
				this.recipeServings = this.recipeEntries.servings;
				console.log(this.recipeServings);
				this.recipeCheap = this.recipeEntries.cheap;
				console.log(this.recipeCheap);
				this.recipeImage = this.recipeEntries.image;
				console.log(this.recipeImage);
				this.recipeDirection = this.recipeEntries.instructions;
				console.log(this.recipeDirection);
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
		this.recipeId = this.activatedRoute.paramMap
	  .pipe(map(() => window.history.state))
	  console.log("RECIPE ID: " + window.history.state.id);
	  this.recipeId = window.history.state.id;
	  console.log("RECIPE ID IN DETAIL: " + this.recipeId)
	}

}
