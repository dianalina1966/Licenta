import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes/recipes.model';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RecipeBook';
  loadedFeature = 'recipe';
  searchTerm = '';
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;
  }

  onSearch(term: string) {
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(term.toLowerCase()) ||
      recipe.description.toLowerCase().includes(term.toLowerCase())
    );
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  handleSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.onSearch(searchTerm);
  }
}
