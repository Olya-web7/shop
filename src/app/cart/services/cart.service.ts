import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  boughtProducts: Product[] = [];

  constructor() { }

  // addToCart(product: Product) {    
  // }

  
}
