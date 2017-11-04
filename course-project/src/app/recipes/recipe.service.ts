
import { Component, OnInit, Input, EventEmitter , Output, Injectable} from '@angular/core';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService  {
	
recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    new Recipe('Schnizel', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    	[
    	new Ingredient('meat', 1),
    	new Ingredient('French fries', 2)
    	]),
    new Recipe('Big burger', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    	[
    	new Ingredient('Buns', 2),
    	new Ingredient('Meat' , 1)
    	])
  ];

	constructor( private shoppingListService: ShoppingListService) {
	}

//zwrócenie kopii tablicy zamiast głównego obiektu
getRecipes() {
	return this.recipes.slice();
}


addIngredientsToShoppingList(ingredients : Ingredient[]) {
	this.shoppingListService.addIngredients(ingredients);
}

}