import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout/:id', component: ProductViewComponent },
{ path: 'checkout', component: ProductViewComponent },

  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
