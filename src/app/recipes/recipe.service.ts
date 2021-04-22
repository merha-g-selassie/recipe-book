import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is simply a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg', [
      new Ingredient('Meat', 5),
      new Ingredient('French Fries', 5),
    ]),
    new Recipe('Second Test Recipe', 'bla bla', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg', [
      new Ingredient('Meat', 5),
      new Ingredient('French Fries', 5),
    ]),
    new Recipe('Third Test Recipe', 'rattatouille', 'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?output-format=auto&output-quality=auto', [
      new Ingredient('Meat', 5),
      new Ingredient('French Fries', 5),
    ]),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
