import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(products: Product[]): Product[] {
    return products.sort((a,b) => a.quantity - b.quantity);
  }

}
