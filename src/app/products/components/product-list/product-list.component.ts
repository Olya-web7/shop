import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [
    {name: 'Milk', price: 2},
    {name: 'Book', price: 1},
    {name: 'Flower', price: 9},
  ];

  boughtProducts: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  getProducts() {
    return this.products;
  }

  // getCart() {
  //   return JSON.parse(localStorage.getItem('cart') as string) || [];
  // }

  // addToCart(product: Product) {
  //   const cart = this.getCart();
  //   cart.push(product.name);
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }


}
