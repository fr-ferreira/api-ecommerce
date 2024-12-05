// filter-products.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: any[], category: string): any[] {
    if (!products || !category) {
      return products;
    }
    return products.filter(product => product.category === category);
  }
}
