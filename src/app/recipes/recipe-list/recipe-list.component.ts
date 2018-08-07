import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Collard Greens", "Delicious green collard greens.", "https://c1.staticflickr.com/1/152/393223986_369cb3a80f_z.jpg?zz=1"),
    new Recipe("Steak", "Ridiculously delicious charred steak.", "https://c.pxhere.com/photos/3c/7c/steak_meat_dish_cuisine_food-1186436.jpg!d")
  ];

  constructor() { }

  ngOnInit() {
  }

}