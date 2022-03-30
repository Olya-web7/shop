import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: Product[]; 

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  getProducts() {
    this.products = this.productService.getProducts();
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart') as string) || [];
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // localStorage.setItem('cart', JSON.stringify(cart))
  }

}
