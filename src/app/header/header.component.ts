import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() requestRecipes = new EventEmitter();
  @Output() requestShoppingList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRequestRecipes() {
    this.requestRecipes.emit();
  }

  onRequestShoppingList() {
    this.requestShoppingList.emit();
  }

}
