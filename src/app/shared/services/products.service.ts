import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _http = inject(HttpClient);
  private readonly _baseUrl = 'http://localhost:3000';

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this._baseUrl}/products`);
  }
}
