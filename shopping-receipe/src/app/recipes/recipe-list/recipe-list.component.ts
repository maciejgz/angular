import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe("Pizza", "kapriczioza", "http://www.zajadam.pl/wp-content/uploads/2014/08/pizza-z-pomidorami-4-469x313.jpg"),
		new Recipe("Burger", "just burger", "http://www.seriouseats.com/recipes/assets_c/2015/07/20150728-homemade-whopper-food-lab-35-thumb-1500xauto-425129.jpg"),
	];

  constructor() { }

  ngOnInit() {
  }

}
