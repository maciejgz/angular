	import { Ingredient } from '../shared/ingredient.model';
	import { Component, OnInit, EventEmitter } from '@angular/core';


export class ShoppingListService {
	
private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  	ingredientAdded = new EventEmitter<Ingredient[]>();


	getIngredients() {
		return this.ingredients.slice();
	}

	//dodać:
	//addIngredient
	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientAdded.emit(this.ingredients.slice());
	}

	addIngredients(ingredients : Ingredient[]) {
		
		//słabe rozwiązanie
		/*for (let ingredient of ingredients) {
			this.addIngredient(ingredient);
		}*/
		//dobre rozwiązanie do dodwaniania listy do innej listy
		this.ingredients.push(...ingredients);
		this.ingredientAdded.emit(this.ingredients.slice());
	}
}