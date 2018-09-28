import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ShoppingListService } from '../../shared/shoppinglist.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipeDetails: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { 
  }

  ngOnInit() {

   }

   ingredientsToShoppingList() {
     this.shoppingListService.ingredients.push(...this.recipeDetails.ingredients);
   }

}