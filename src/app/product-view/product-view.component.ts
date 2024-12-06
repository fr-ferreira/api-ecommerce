import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart-service.service';
import { ApiService } from '../service/api.service';
import { Product } from '../models/model';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productId: number | null = null;
  product: Product | null = null;
  relatedProducts: Product[] = [];
  quantity: number = 1; // Quantidade inicial
  cartItems: Product[] = []; // Inicialize com um array vazio
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productId = parseInt(productId, 10);
      this.getProduct(this.productId);
    }
  
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['cartItems']) {
      this.cartItems = [...navigation.extras.state['cartItems']];
    }
  }

  getProduct(id: number): void {
    this.productService.getProductById(id).subscribe((product: Product) => {
      this.product = product;
      this.getRelatedProducts(id); // Carrega produtos relacionados após o produto principal ser carregado
    });
  }
  
  getRelatedProducts(id: number): void {
    const currentCategory = this.product?.category;
    if (currentCategory) {
      this.productService.getRelatedProducts(currentCategory).subscribe((products: Product[]) => {
        this.relatedProducts = products.filter(product => product.id !== id);
      });
    }
  }

  // Adiciona o produto ao carrinho
  addToCart() {
    if (this.product && this.quantity > 0) {
      // Adiciona o produto no carrinho a quantidade de vezes especificada
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product); // Adiciona no serviço de carrinho
        this.cartItems.push(this.product); // Também adiciona diretamente na lista de cartItems
      }
      alert(`${this.quantity} item(s) added to cart!`);
    }
  }

  // Visualiza outro produto relacionado
  viewProduct(id: number) {
    window.location.href = `/product/${id}`;
  }

  // Calcula o preço total dos itens no carrinho
  totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  completePurchase(): void {
    alert('Compra realizada com sucesso!');
    this.cartItems = [];
    this.router.navigate(['/checkout'], { state: { cartItems: this.cartItems } });

  }

  
}

