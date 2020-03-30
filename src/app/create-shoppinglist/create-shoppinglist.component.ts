import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/ShoppingList';
import { ShoppinglistService } from '../shoppinglist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shoppinglist',
  templateUrl: './create-shoppinglist.component.html',
  styleUrls: ['./create-shoppinglist.component.css']
})
export class CreateShoppinglistComponent implements OnInit {

  list: ShoppingList = new ShoppingList();
  submitted = false;

  constructor(private listService: ShoppinglistService, private router: Router) { }

  ngOnInit(): void {
  }

  newShoppingList(): void {
    this.submitted = false;
    this.list =  new ShoppingList();
  }

  save() {
    this.listService.createShoppingList(this.list)
    .subscribe(data => console.log(data), error => console.log(error));
    this.list = new ShoppingList();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/shoppingList']);
  }

}
