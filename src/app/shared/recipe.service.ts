import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'

export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Collard Greens', 'Baked collard greens.', 'https://c1.staticflickr.com/1/152/393223986_369cb3a80f_z.jpg?zz=1'),
        new Recipe('Steak', 'Medium rare teak.', 'https://c.pxhere.com/photos/3c/7c/steak_meat_dish_cuisine_food-1186436.jpg!d')
      ];

    constructor() {

    }

    getRecipes() {
        return this.recipes.slice();
    }
}