import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient('Beef', 5),
      new Ingredient('Collard Greens', 3)
    ];
  }

  ngOnInit() {

  }

  addItem({name, amount}) {
    this.ingredients.push(new Ingredient(name, amount));
  }

  clearItemList() {
    this.ingredients = [];
  }

  deleteItem(name) {

    let flag = -1;

    this.ingredients.forEach((item, index) => {
      if (name.toUpperCase() ===  item.name.toUpperCase()) {
        flag = index;
      }
    });

    this.ingredients.splice(flag, 1);

  }

}
