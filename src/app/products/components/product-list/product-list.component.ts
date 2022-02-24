import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {name: 'Milk', price: 2},
    {name: 'Book', price: 1},
    {name: 'Flower', price: 9},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  getProducts() {
    return this.products;
  }

}
