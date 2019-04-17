import { UserRecipesService } from './../services/user-recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../objects/recipe';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  private userRecipes: Recipe[] = [];
  private dataTable: any;
  //title ; ingredients ; detail button
  


  constructor(private userRecipeService: UserRecipesService) { }



  ngOnInit() {
    this.getUserRecipes();
  }

  getUserRecipes(){
    let userId = sessionStorage.getItem("userID");
    console.log("GETTING RECIPES FOR USER AT ID: " + userId);
    this.userRecipeService.getUserRecipes(userId).subscribe(
      resp => {
        this.userRecipes = resp as Recipe[];
        console.log("Saved Recipes for User retrieved: " + this.userRecipes);
        console.log("First Saved Recipe for User: " + this.userRecipes[0].title);
        JSON.stringify(this.userRecipes);
        console.log("After Stringify for Datatables: " + this.userRecipes);

        const table: any = $('table');
        this.dataTable = table.DataTable({searching: false});
      }
    )
  }
}
