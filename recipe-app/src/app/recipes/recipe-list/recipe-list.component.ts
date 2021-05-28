import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  constructor(private recipeService: RecipeServce, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      })
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
