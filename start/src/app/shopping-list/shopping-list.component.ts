import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients : Ingredient[];
  private subcription : Subscription
  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingList.getIngredients();
    this.subcription = this.shoppingList.ingredientsChanged.subscribe(
      (ingredients)=>{
        this.ingredients = ingredients
      }
    )
  }
  onEditItem(index:number){
    this.shoppingList.startedEditing.next(index)
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.shoppingList.addIngredients([ingredient])
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }
}
