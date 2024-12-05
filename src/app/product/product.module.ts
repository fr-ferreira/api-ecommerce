// product.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProductComponent } from './product.component';

// Import the necessary Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    MatSidenavModule,   // Import MatSidenavModule
    MatToolbarModule,   // Import MatToolbarModule
    MatIconModule,      // Import MatIconModule
    MatButtonModule,     // Import MatButtonModule
    CommonModule
  ],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule {}
