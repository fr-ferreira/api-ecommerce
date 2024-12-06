import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';  // Importa o ProductModule

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared.module'; // Importa o SharedModule
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    CartComponent,
    ProductViewComponent
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    CartComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule, // Garante que o ProductModule foi importado
    SharedModule, // Garante que o SharedModule foi importado para o pipe filterProducts
    MatCardModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    RouterModule,
    BrowserAnimationsModule,
    ProductModule
  ],
  providers: [ApiService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Útil caso use web components personalizados
  bootstrap: [AppComponent],
})
export class AppModule {}
