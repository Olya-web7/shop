import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      {
        id: 1,
        name: 'Milk',
        price: 4,
        isAvailable: true,
      },
      {
        id: 2,
        name: 'Apple',
        price: 17,
        isAvailable: true,
      },      
      {
        id: 3,
        name: 'Tea',
        price: 29,
        isAvailable: true,
      },
    ];
  }
}
