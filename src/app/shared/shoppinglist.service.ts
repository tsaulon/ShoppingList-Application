import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    requestAdd = new EventEmitter<Ingredient>();
    requestClear = new EventEmitter();
    requestDelete = new EventEmitter<string>();

    ingredients: Ingredient[] = [
        new Ingredient('Beef', 5),
        new Ingredient('Collard Greens', 3)
    ];;

    constructor() {
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    clearIngredientList() {
        delete this.ingredients;
        this.ingredients = [];
        this.ingredientsChanged.emit(this.getIngredients());
    }

    deleteIngredient(name: string) {
        let flag = -1;

        this.ingredients.forEach((item, index) => {
            if (name.toUpperCase() === item.name.toUpperCase()) {
                flag = index;
            }
        });

        if (flag > -1) {
            this.ingredients.splice(flag, 1);
            this.ingredientsChanged.emit(this.getIngredients());
        }
    }

}