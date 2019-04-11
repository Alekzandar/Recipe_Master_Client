import { Component, OnInit} from '@angular/core';
import { RecipeService } from './../services/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../objects/recipe';
import { of } from 'rxjs';

@Component({
	selector: 'app-jacky-view',
	templateUrl: './jacky-view.component.html',
	styleUrls: ['./jacky-view.component.css']
})

export class JackyViewComponent implements OnInit {
	private recipesObs: Observable<Recipe[]>;
	private recipesList: Recipe[];

	names = '';
	constructor(private recipeService: RecipeService) { }

	ngOnInit() {
	}

	loadRecipes(): void {
		console.log(this.names);
		this.recipeService.getRecipes().subscribe(
			resp => {
				this.recipesList = resp as Recipe[];
				console.log(this.recipesList);
			}
		);

	}
}