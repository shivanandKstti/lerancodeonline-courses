import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeServce {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'recipe1',
            'recipe desc', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new Ingredient('meet', 1),
                new Ingredient('meet1', 10)
            ]),
        new Recipe(
            'recipe3', 
            'recipe desc', 
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
            [
                new Ingredient('buns', 1),
                new Ingredient('meet', 10)
            ]),
      ];

    constructor(private slService: ShoppingListService){}
      
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredientsFromShoppingList(ingredients);
    }
}