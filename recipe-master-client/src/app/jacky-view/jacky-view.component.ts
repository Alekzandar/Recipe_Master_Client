import { LogInService } from './../services/login.service';
import { User } from './../objects/User';
import { Component, OnInit } from '@angular/core';
import { QueryService } from './../services/query.service';
import { Observable } from 'rxjs';
import { Recipe } from '../objects/recipe';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
	selector: 'app-jacky-view',
	templateUrl: './jacky-view.component.html',
	styleUrls: ['./jacky-view.component.css']
})

export class JackyViewComponent implements OnInit {
	private recipesObs: Observable<Recipe[]>;
	private recipesList: Recipe[] = [];
	private names: string = '';
	private queryNames: string = '';
	private faveRecipes: Recipe[] = [];
	private ingredients = "";
	rChecked = false;
	private badLogIn = false;

	regex = /,/g;
	add: string = '%2C';
	private recipeUrl: string = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=';

	constructor(private queryService: QueryService, private logInServce: LogInService, public router: Router) { }

	nameLoad(): void {
		this.badLogIn = false;
		this.queryNames = this.names.replace(this.regex, this.add);
		console.log("OLD STRING: " + this.names);
		console.log("NEW NAMES: " + this.queryNames);
		let url = this.recipeUrl + this.names;
		console.log("afterRECIPE URL: " + url);
		this.queryService.getRecipes(url).subscribe(
			resp => {
				if(resp.length >= 1){
					this.recipesList = resp as Recipe[];
					console.log(this.recipesList);
					this.names = '';					
				}else{
					this.badLogIn = true;
					console.log("Bad input");
					this.names = '';
				}

				
				//console.log("MISSED INGREDIENTS FOR SECOND RECIPE: " + this.recipesList[1].missedIngredients[0].name);
				//this.m = Object.values(this.recipesList.);
			}
		);
	}

	objectKeys(obj) {
		//console.log("IN KEY FUNCTION: " + obj);
		let properties = Object.values(obj);
		//console.log("OBJ: " + properties);
		//console.log("OBJ PROP: " + properties[6]); //IM SO UPSET ABOUT THIS - ALEKS
		return properties[6].toString();

	}

	onCheckboxChagen(event, recipe, index) {
		let faveRecipe: Recipe = new Recipe();
		faveRecipe.user = new User();
		faveRecipe.user.id = 0;
		let ingredients: string = "";

		faveRecipe.id = recipe.id;
		faveRecipe.image = recipe.image;
		faveRecipe.title = recipe.title;

		JSON.stringify(recipe);
		recipe.missedIngredients.forEach(element => {
			ingredients = ingredients.concat(element.name + ", ");

		});
		ingredients += this.names;
		faveRecipe.ingredients = ingredients;
		let userId: number = parseInt(sessionStorage.getItem('userID'));
		//console.log("User ID: " + userId);
		faveRecipe.user.id = userId;
		//console.log(JSON.stringify(faveRecipe));
		//console.log("STARTING FAVE LIST: " + this.faveRecipes + " OF TYPE: " + typeof(this.faveRecipes));
		if (event.checked) {
			this.faveRecipes.push(faveRecipe);
			//console.log("FAVE RECIPES LIST AFTER CHECK: " + this.faveRecipes + " OF TYPE: " + typeof(this.faveRecipes));
		}
		if (!event.checked) {
			if (index > -1) {
				this.faveRecipes = this.faveRecipes.splice(index, 1);
			}
		}
		console.log("CHECKING NAMES: " + this.names);
		console.log("INGREDIENTS TO ATTACH TO OBJ: " + ingredients);
		console.log("FAVES RECIPE ARRAY: " + JSON.stringify(this.faveRecipes));
	}


	saveFaveRecipes() {
		JSON.stringify(this.faveRecipes);
		console.log("PREPARING FAVE RECIPES FOR SERVICE: " + this.faveRecipes);
		this.queryService.postRecipes(this.faveRecipes).subscribe(
			resp => {
				console.log("SUCCESSFULLY POSTED TO SERVER");
				window.location.href = '/user-dash';
			}
		)
	}

	showSubmit() {
		let status = this.logInServce.loggedIn();
		return status;
	}

	getDetails(recipe){
		console.log("CLICKED MORE DETAILS FOR: " + recipe.id);
		let recipeId = recipe.id;
		console.log("RECIPE ID TO PASS:" + recipeId);
		this.router.navigateByUrl('/detail', { state: { id: recipeId } });
	  }


	ngOnInit() {
		this.showSubmit();
	}

	ngDoCheck() { this.showSubmit(); }

}