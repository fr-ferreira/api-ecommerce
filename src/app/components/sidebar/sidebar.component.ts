import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart-service.service';
import { ProductService } from '../../service/product.service';
import { Product } from '../../models/model';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  
  cartItemCount = 0;
  product: Product | null = null;

  constructor(private cartService: CartService, private productService: ProductService, private apiService: ApiService,) {}


  ngOnInit(): void {
    const productId: number = 1; // Declare productId locally inside ngOnInit
    this.apiService.getProductById(productId).subscribe(
      (product) => {
        this.product = product; // Store the fetched product
        console.log(this.product); // You can use this product in your template
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
    
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });

    // Fetch the product (e.g., the last added product to the cart)
    this.productService.getProductById(1).subscribe(product => {
      this.product = product;
    });
    
  }

}
