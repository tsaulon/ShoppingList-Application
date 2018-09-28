import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shared/shoppinglist.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
    
    // Listen for event requestAdd...
    this.shoppingListService.requestAdd.subscribe((ingredient: Ingredient) => {
      if (ingredient.name.trim().length > 0 && ingredient.amount > 0) {
        this.shoppingListService.addIngredient(ingredient);
      }    })

    //Listen for event requestClear...
    this.shoppingListService.requestClear.subscribe(() => {
      this.shoppingListService.clearIngredientList();
    })

    this.shoppingListService.requestDelete.subscribe((name: string) => {
      this.shoppingListService.deleteIngredient(name);
    })
  }

}
