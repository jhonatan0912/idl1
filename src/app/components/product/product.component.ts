import { Component, input } from '@angular/core';
import { Product } from '../../shared/services/products.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'product',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {

  product = input.required<Product>();


  addToCart(product: Product): void { }
}
