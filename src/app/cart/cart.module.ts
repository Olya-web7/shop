import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CartItemComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class CartModule { }
