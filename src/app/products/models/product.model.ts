export interface Product {
  id?: number,
  name?: string;
  price: number;
}

export class Product {
  constructor(
  id: number,
  name: string,
  price: number
  ) {}
}