import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { CartProduct } from '../../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartProduct; 
  
  @Output() quantityIncrease: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() quantityDecrease: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteItem: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {}

  onQuantityIncrease() {
    this.quantityIncrease.emit(this.product);
  }

  onQuantityDecrease() {
    this.quantityDecrease.emit(this.product);
  }

  onDeleteItem() {
    this.deleteItem.emit(this.product);
  }
  
  get product() : Product {
    return this.cartItem.product;
  }
  
  get count() : number {
    return this.cartItem.count;
  }
}
