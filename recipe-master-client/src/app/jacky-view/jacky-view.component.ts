import { User } from './../objects/User';
import { Component, OnInit } from '@angular/core';
import { QueryService } from './../services/query.service';
import { Observable } from 'rxjs';
import { Recipe } from '../objects/recipe';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Component({
	selector: 'app-jacky-view',
	templateUrl: './jacky-view.component.html',
	styleUrls: ['./jacky-view.component.css']
})

export class JackyViewComponent implements OnInit {
	private recipesObs: Observable<Recipe[]>;
	private recipesList: Recipe[];
	private names:string = '';
	private queryNames:string = '';
	private faveRecipes: Recipe[] = [];
	rChecked = false;

	regex = /,/g;
	add:string = '%2C';
	private recipeUrl:string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=';

	constructor(private queryService: QueryService) { }

	nameLoad(): void {
		console.log("IN FUNCTION");
		console.log("OLD STRING: " + this.names);
		this.queryNames  = this.names.replace(this.regex, this.add);
		console.log("NEW NAMES: " + this.queryNames);
		this.recipeUrl+=this.names;
		console.log("afterRECIPE URL: " + this.recipeUrl);
		this.queryService.getRecipes(this.recipeUrl).subscribe(
			resp => {
			  this.recipesList = resp as Recipe[]; 
			  console.log(this.recipesList);
			  //console.log("MISSED INGREDIENTS FOR SECOND RECIPE: " + this.recipesList[1].missedIngredients[0].name);
			  //this.m = Object.values(this.recipesList.);
			}
		  );
		}

	objectKeys(obj){
		//console.log("IN KEY FUNCTION: " + obj);
		let properties = Object.values(obj);
		//console.log("OBJ: " + properties);
		//console.log("OBJ PROP: " + properties[6]); //IM SO UPSET ABOUT THIS - ALEKS
		return properties[6].toString();

	}
	
	onCheckboxChagen(event, recipe, index) {
		let faveRecipe: Recipe = new Recipe();
		let ingredients: string = "";

		faveRecipe.id = recipe.id;
		faveRecipe.image = recipe.image;
		faveRecipe.title = recipe.title;

		JSON.stringify(recipe);
		recipe.missedIngredients.forEach(element => {
			ingredients = ingredients.concat(element.name + ", ");
			
		});
		ingredients += this.queryNames;
		faveRecipe.ingredients = ingredients;
		//this.faveRecipe.user.id = sessionStorage.getItem('userID');
		console.log(JSON.stringify(faveRecipe));
		//console.log("STARTING FAVE LIST: " + this.faveRecipes + " OF TYPE: " + typeof(this.faveRecipes));
		if (event.checked) {
		  this.faveRecipes.push(recipe);
		  //console.log("FAVE RECIPES LIST AFTER CHECK: " + this.faveRecipes + " OF TYPE: " + typeof(this.faveRecipes));
		} 
		if (!event.checked) {
		  if (index > -1) {
			this.faveRecipes = this.faveRecipes.splice(index, 1);
		  }
		}
		console.log("FAVES RECIPE ARRAY: " + JSON.stringify(this.faveRecipes));
	}


	saveFaveRecipes(){

	}


	ngOnInit() {
	}

}