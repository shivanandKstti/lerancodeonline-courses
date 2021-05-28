import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';
import { RecipeServce } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipe obj
  recipes: Recipe[];
  constructor(private recipeService: RecipeServce) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

}
