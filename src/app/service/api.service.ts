import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../models/model';
@Injectable()
export class ApiService {
  apiUrl = 'https://fakestoreapi.com/';

  private cartItems: Product[] = [];
  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.cartItems);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'products');
  }

  addProduct(productData: any): Observable<any> {
    console.log(productData);
    return this.httpClient.post<any>(
      this.apiUrl + 'products',
      JSON.stringify(productData),
      this.httpOptions
    );
  }

  // Get the current cart items as an observable
  getCartItems() {
    return this.cartSubject.asObservable();
  }

  // Add a product to the cart
  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems); // Update the cart
  }

  // Remove a product from the cart by its ID
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(product => product.id !== productId);
    this.cartSubject.next(this.cartItems); // Update the cart
  }

  // Clear all products from the cart
  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems); // Update the cart
  }

  
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}products/${id}`);
  }
  
  checkout(cartItems: Product[]): Observable<any> {
    return this.httpClient.post<any>('http://www.uol.com.br/', { items: cartItems });
  }
  
}
