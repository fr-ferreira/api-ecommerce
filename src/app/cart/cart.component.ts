import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart-service.service';
import { Product } from '../models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Inscrever-se para ouvir mudanças no carrinho
    this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
    });

    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.cartItems = navigation.extras.state['cartItems'];  // Atribuindo os itens corretamente
    }
  }

  // Método para remover um item do carrinho
  // removeFromCart(productId: number) {
  //   this.cartService.removeFromCart(productId);
  // }

  totalPrice(): number {
    // Garantindo que o 'total' seja do tipo 'number'
    return this.cartItems.reduce((total: number, item: Product) => total + item.price, 0);
  }

  checkout(): void {
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout'], {
        state: { cartItems: this.cartItems }
      });
    } else {
      alert('Seu carrinho está vazio.');
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }
}