import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cartItems);

  // Observable para que os componentes possam se inscrever
  cart$ = this.cartSubject.asObservable();

  // Adicionar item ao carrinho
  addToCart(product: Product) {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  // Remover item do carrinho
  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartSubject.next(this.cartItems);
  }

  // Obter os itens do carrinho
  getCartItems() {
    return this.cartSubject.asObservable();
  }
}
