import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  boughtProducts: Product[] = [];
  
  constructor() { }
  
  ngOnInit(): void {
    // this.boughtProducts = JSON.parse(localStorage.getItem('cart') as string);
  }
  
  // trackByItems(index: number, item: Product): string { return item.name; }
}
