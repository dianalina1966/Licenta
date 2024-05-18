import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shoppinglist/shopping-list.service";

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[]  =[
        new Recipe(
            'Chec zebra',
            'Chec pufoc cu cacao, trucuri pentru o reteta reusita.',
            'https://jamilacuisine.ro/wp-content/uploads/2013/03/Chec-pufos-cu-cacao.jpg',
            [
                new Ingredient('faina',200),
                new Ingredient('zahar', 200),
                new Ingredient('oua',5),
                new Ingredient('zahar vanilat',16),
                new Ingredient('ulei',4),
                new Ingredient('cacao',2),
                new Ingredient('praf de copt',1)
            ]),
        new Recipe(
            'Ciorba radauteana',
            'Ciorba radauteana, ce legume adaugam, cum o dregem?',
            'https://jamilacuisine.ro/wp-content/uploads/2014/03/Ciorba-radauteana-696x392.jpg.webp',
            [
                new Ingredient('carne de pui',700),
                new Ingredient('smantana',300),
                new Ingredient('oua',4),
                new Ingredient('otet',3),
                new Ingredient('pastarnac',2),
                new Ingredient('ceapa',2),
                new Ingredient('ardei gras',1),
                new Ingredient('morcov',1),
                new Ingredient('patrunjel',1),
                new Ingredient('telina',1),
                new Ingredient('usturoi',1),
                new Ingredient('foi dafin',5),
                new Ingredient('sare',1),
                new Ingredient('piper',1)

            ]),
        new Recipe(
            'Cheesecake fara coacere cu capsuni ',
            'Cum facem crema pentru un cheesecake reusit?',
            'https://jamilacuisine.ro/wp-content/uploads/2014/05/Cheesecake-fara-coacere-696x392.jpg.webp',
            [
                new Ingredient('biscuiti digestivi',400),
                new Ingredient('unt',150),
                new Ingredient('crema de branza',600),
                new Ingredient('frisca lichida',500),
                new Ingredient('zahar pudra',150),
                new Ingredient('apa plata',200),
                new Ingredient('lapte',100),
                new Ingredient('gelatina',30),
                new Ingredient('pastaie vanilie',1),
                new Ingredient('capsuni',600),
                new Ingredient('zahar',50)

            ]),
        new Recipe(
            'Prajitura Alba ca zapada',
            'Cea mai buna crema pentru Alba ca zapada.',                
            'https://jamilacuisine.ro/wp-content/uploads/2013/06/Prajitura-alba-ca-zapada-696x392.jpg.webp',
            [
                new Ingredient('lapte',1),
                new Ingredient('zahar',600),
                new Ingredient('ulei',150),
                new Ingredient('oua',2),
                new Ingredient('bicarbonat de sodiu',1),
                new Ingredient('sare',1),
                new Ingredient('faina',550),
                new Ingredient('unt',200),
                new Ingredient('lamaie',1),
                new Ingredient('esenta de vanilie',1)

            ]),
        new Recipe(
            'Tiramisu clasic ',
            'Mod de preparare tiramisu clasic',               
            'https://jamilacuisine.ro/wp-content/uploads/2013/09/Tiramisu-clasic.jpg',
            [
                new Ingredient('mascarpone',500),
                new Ingredient('cafea',500),
                new Ingredient('piscoturi',400),
                new Ingredient('zahar',150),
                new Ingredient('oua',5),
                new Ingredient('cacao',150),
                new Ingredient('esenta de vanilie',1)
            ])
      ];
      constructor(private slService: ShoppingListService){}
    
      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}