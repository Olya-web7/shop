import { Product } from "src/app/products/models/product.model";

export interface Cart {
    [productId: number] : CartProduct;
}

export interface CartProduct {
    product: Product;
    count: number;
}