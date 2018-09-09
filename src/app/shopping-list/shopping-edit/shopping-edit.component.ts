import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @Output() requestAdd = new EventEmitter<Ingredient>();
  @Output() requestClear = new EventEmitter();
  @Output() requestDelete = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  requestAddItem(itemName: HTMLInputElement, itemAmount: HTMLInputElement) {
    this.requestAdd.emit(new Ingredient(itemName.value, <number><any>itemAmount.value));
  }

  requestClearItemList() {
    this.requestClear.emit();
  }

  requestDeleteItem(itemName: HTMLInputElement) {
    this.requestDelete.emit(itemName.value);
  }

}
