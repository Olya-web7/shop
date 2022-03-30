import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { Cart } from '../cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart!: Cart;

  constructor() { }

  addToCart(product: Product) {}  

  getCartProducts() {}
  
}
