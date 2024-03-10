import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { Product, ProductsService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private readonly _productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this._productsService.getProducts()
      .subscribe({
        next: (products) => this.products.set(products),
        error: (err) => console.error(err)
      });
  }
}
