import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shared/shoppinglist.service';
import { Recipe } from '../recipes/recipe.model'
import { Ingredient } from './ingredient.model';


@Injectable()
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Collard Greens', 
            'Baked collard greens.',
            'https://c1.staticflickr.com/1/152/393223986_369cb3a80f_z.jpg?zz=1', 
            [
                new Ingredient("Collard Greens", 10), 
                new Ingredient("Ham Hock", 3)
            ]
        ),
        new Recipe(
            'Steak', 
            'Medium rare teak.', 
            'https://c.pxhere.com/photos/3c/7c/steak_meat_dish_cuisine_food-1186436.jpg!d',
            [
                new Ingredient("Beef Tenderloin", 2), 
                new Ingredient("Garlic", 4)
            ]
        )
      ];

    constructor() {

    }

    getRecipes() {
        return this.recipes.slice();
    }
    
}