import { Component, OnInit } from '@angular/core';
import { ShoppinglistService } from '../shoppinglist.service';
import { ShoppingList } from '../shared/ShoppingList';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-shoppinglist',
  templateUrl: './show-shoppinglist.component.html',
  styleUrls: ['./show-shoppinglist.component.css']
})
export class ShowShoppinglistComponent implements OnInit {

  list: Observable<ShoppingList[]>;

  constructor(private listService: ShoppinglistService) { }

  ngOnInit(): void {
    this.reloadList();

  }

  reloadList(): void {
    this.list = this.listService.getAllLists();
  }

  deleteList(id: number) {
    this.listService.deleteShoppingList(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadList();
      },
      error => console.log(error));
  }

}
