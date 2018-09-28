import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  private currRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      console.log(`recipe: Intercepting ${recipe.name}`)
      this.currRecipe = recipe;
    })

  }
}
