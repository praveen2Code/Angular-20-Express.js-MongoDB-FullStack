import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { ApiService } from './api-service';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  message?: string;
}


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private endpoint = 'products'; 

  apiService = inject(ApiService);


  getAllProducts(): Observable<Product[]> {
    return this.apiService.get<ApiResponse<Product[]>>(this.endpoint)
      .pipe(map(response => response.data || []));
  }

  getProductById(id: string): Observable<Product> {
    return this.apiService.get<ApiResponse<Product>>(`${this.endpoint}/${id}`)
      .pipe(map(response => response.data as Product));
  }

  createProduct(product: Product): Observable<Product> {
    return this.apiService.post<ApiResponse<Product>>(this.endpoint, product)
      .pipe(map(response => response.data as Product));
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.apiService.put<ApiResponse<Product>>(`${this.endpoint}/${id}`, product)
      .pipe(map(response => response.data as Product));
  }

  deleteProduct(id: string): Observable<any> {
    return this.apiService.delete<ApiResponse<any>>(`${this.endpoint}/${id}`);
  }
}