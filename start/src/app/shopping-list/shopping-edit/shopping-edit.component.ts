import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') sForm: NgForm
  subscription: Subscription
  editMode = false;
  editedItemIndex: number
  editItem: Ingredient
  constructor(private shopService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shopService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editItem = this.shopService.getIngredient(index);
      this.sForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })
    }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopService.updateIngredient(this.editedItemIndex,newIngredient)
    }else{
      this.shopService.addIngredient(newIngredient)
    }
    this.editMode = false;
    this.sForm.reset()
  }
  onClear()
  {
    this.sForm.reset()
    this.editMode =false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete()
  {
    this.shopService.deleteIngredient(this.editedItemIndex)
    this.editMode = false;
    this.sForm.reset()
  }
}
