import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/products/models/product.model';
import { CartProduct } from '../../cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  onAddProduct(product: Product) {
    this.cartService.addProduct(product);
  }

  onRemoveProduct(product: Product) {
    this.cartService.removeProduct(product);
  }

  onDeleteProduct(product: Product) {
    this.cartService.deleteProduct(product);
  }

  trackByProduct(index: number, cartProduct: CartProduct): number {
    return cartProduct.product.id;
  }
  
}
