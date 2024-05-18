import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { FormsModule } from '@angular/forms';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './shoppinglist/shopping-list.service';
import { CiorbeComponent } from './recipes/recipelist/ciorbe/ciorbe.component';
import { ConserveComponent } from './recipes/recipelist/conserve/conserve.component';
import { DiverseComponent } from './recipes/recipelist/diverse/diverse.component';
import { DulciuriComponent } from './recipes/recipelist/dulciuri/dulciuri.component';
import { MancaruriComponent } from './recipes/recipelist/mancaruri/mancaruri.component';
import { PaineComponent } from './recipes/recipelist/paine/paine.component';
import { SalateComponent } from './recipes/recipelist/salate/salate.component';
import { TorturiComponent } from './recipes/recipelist/torturi/torturi.component';
import { AperitiveComponent } from './recipes/recipelist/aperitive/aperitive.component';
import { RezultateCautareComponent } from './rezultate-cautare/rezultate-cautare.component';
import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    DropdownDirective,
    CiorbeComponent,
    ConserveComponent, 
    DiverseComponent,
    DulciuriComponent,
    MancaruriComponent,
    PaineComponent,
    SalateComponent,
    TorturiComponent,
    AperitiveComponent,
    RezultateCautareComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
