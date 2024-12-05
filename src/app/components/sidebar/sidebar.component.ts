import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart-service.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    this.cartService.cart$.subscribe((items) => {
      this.cartItemCount = items.length;  // Atualiza o número de itens no carrinho
    });
  }

}
