import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  // Obter detalhes do produto pelo ID
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  // Obter produtos relacionados
// No ProductService, atualize a função getRelatedProducts
getRelatedProducts(category: string): Observable<Product[]> {
  return this.http.get<Product[]>(`${this.baseUrl}?category=${category}`);
}

}
