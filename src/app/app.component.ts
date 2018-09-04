import { Component } from '@angular/core';

enum Pages {
  RECIPES = 'RECIPES',
  SHOPPING = 'SHOPPING'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  currentPage = Pages.RECIPES;

  showRecipes() {
    this.currentPage = Pages.RECIPES;
  }

  showShoppingList() {
    this.currentPage = Pages.SHOPPING;
  }
}
