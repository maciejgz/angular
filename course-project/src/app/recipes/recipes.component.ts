import { Component, OnInit } from '@angular/core';


import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

	selectedRecipe: Recipe;

  constructor(private recipeService : RecipeService) { 

  }

  
  //nasłuchiwanie czy została wybrana jakaś recipe w serwisie 
  // jest znacznie lepiej i bez przenoszenia obiektów przez wiele poziomów
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
      );
  }

  onRecipeSelected(recipe: Recipe) {
  	this.selectedRecipe = recipe;
  	console.log(recipe);
  }

}
