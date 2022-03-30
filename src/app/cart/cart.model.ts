import { Product } from "../products/models/product.model";

export interface Cart {
  product: Product;
  count: number;
}