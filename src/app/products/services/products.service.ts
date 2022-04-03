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
        description: 'Prostokvashino milk 2,5% 1.5L',
        price: 4,
        isAvailable: true,
        imageUrl: 'https://img.fozzyshop.com.ua/204151-large_default/moloko-prostokvashino-pasterizovannoe-25.jpg'
      },
      {
        id: 2,
        name: 'Snickers',
        description: 'Chocolate bar 112.5g',
        price: 17,
        isAvailable: true,
        imageUrl: 'https://ua.all.biz/img/ua/catalog/22573963.jpg'
      },      
      {
        id: 3,
        name: 'Cowboy Hat',
        description: 'American style cowboy hat',
        price: 29,
        isAvailable: true,
        imageUrl: 'https://www.u-buy.com.ua/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzE5RUhYcmNUWUwuX0FDX1VMMTUwMF8uanBn.jpg'
      },
    ];
  }
}
