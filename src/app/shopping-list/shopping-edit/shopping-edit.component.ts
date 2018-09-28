import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  requestAddItem() {
    this.shoppingListService.requestAdd.emit(new Ingredient(this.nameInputRef.nativeElement.value, <number><any>this.amountInputRef.nativeElement.value));
  }

  requestClearItemList() {
    this.shoppingListService.requestClear.emit();
  }

  requestDeleteItem() {
    this.shoppingListService.requestDelete.emit(this.nameInputRef.nativeElement.value);
  }

}
