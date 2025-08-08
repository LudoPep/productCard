import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  quantity: number = 1;
  isOutOfStock: boolean = false;
  selectedVariant: string = '';
  apples: string[] = ['Granny Smith', 'Gala', 'Golden'];

  toIncrement() {
    this.quantity++;
  }

  toDecrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (!this.isOutOfStock) {
      console.log(`Granny Smith apple has been added to the cart.`);
    }
  }
}
