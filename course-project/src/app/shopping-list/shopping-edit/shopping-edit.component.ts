import { Component, OnInit, Output,ViewChild, ElementRef,EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '..//shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	
	@ViewChild('nameInput') ingredientNameInput : ElementRef;
	@ViewChild('amountInput') ingredientAmountInput : ElementRef;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

onAddIngredient() {
	console.log(this.ingredientNameInput.nativeElement.value);
	const newIngredient = new Ingredient(this.ingredientNameInput.nativeElement.value, this.ingredientAmountInput.nativeElement.value)
	this.shoppingListService.addIngredient(newIngredient);
}

}
