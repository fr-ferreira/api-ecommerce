import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart-service.service';
import { Product } from '../models/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Inscrever-se para ouvir mudanças no carrinho
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  // Método para remover um item do carrinho
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
