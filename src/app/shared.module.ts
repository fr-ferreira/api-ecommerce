// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductsPipe } from './filter-products.pipe'; // Importe o pipe

@NgModule({
  declarations: [FilterProductsPipe],
  imports: [CommonModule],
  exports: [FilterProductsPipe]  // Exporte o pipe
})
export class SharedModule {}
