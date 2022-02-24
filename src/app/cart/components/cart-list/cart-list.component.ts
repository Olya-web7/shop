import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  boughtProducts: Product[] = [
    // {name: 'Milk', price: 2},
    // {name: 'Book', price: 1},
    // {name: 'Flower', price: 9},
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  // trackByItems(index: number, item: Product): string { return item.name; }
}
