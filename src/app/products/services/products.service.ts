import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(4, 'glass', 45),
      new Product(5, 'phone', 55),
      new Product(6, 'table', 25)
    ];
  }
}
