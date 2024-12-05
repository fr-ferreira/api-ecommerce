import { Component, OnInit } from '@angular/core';
import { Product } from '../models/model';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  visibleForm = false;
  item: Product = new Product(0, '', '', '', '', '');
  productAddedResponse: any;
  public isExpanded = false;

  // Cart array to store the products added to the cart
  cart: Product[] = [];

  constructor(private apiService: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
    
  }

  // Toggle menu for UI purposes
  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  // Get products from the API
  // getProducts() {
  //   this.apiService.getProducts().subscribe((res) => {
  //     this.products = res;
  //   });
  // }

  // Submit form to add a product
  submitForm() {
    this.apiService.addProduct(this.item).subscribe((res) => {
      if (res) {
        this.item = new Product(0, '', '', '', '', '');
        console.log(res);
      }
    });
  }

  // Toggle the visibility of the form
  toggleForm() {
    this.visibleForm = !this.visibleForm;
  }

  // Add product to cart by ID
  // addToCart(product: Product) {
  //   this.cart.push(product);
  //   console.log('Added to cart', this.cart);
  // }

  // // Remove product from cart by ID
  // removeFromCart(productId: number) {
  //   this.cart = this.cart.filter(product => product.id !== productId);
  //   console.log('Removed from cart', this.cart);
  // }

  // Handle add product functionality
  addProduct() {
    this.toggleForm();
  }

  // Cancel adding a product
  cancel() {
    this.item = new Product(0, '', '', '', '', '');
    this.getProducts();
    this.toggleForm();
  }

  // In your ProductComponent class
isInCart(productId: number): boolean {
  return this.cart.some(p => p.id === productId);
}

getProducts() {
  this.apiService.getProducts().subscribe((res) => {
    this.products = res;
  });
}

// Adicionar produto ao carrinho
addToCart(product: Product) {
  this.cartService.addToCart(product);
}

// Remover produto do carrinho
removeFromCart(productId: number) {
  this.cartService.removeFromCart(productId);
}

}
