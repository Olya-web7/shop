import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Array<Product>;

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCart() {
    console.log('The product moved to your cart');
    
  }

}
