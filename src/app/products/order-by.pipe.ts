import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(products: Product[], orderBy: string, orderDirection: string): Product[] {
  if(!products || !orderBy || !orderDirection) {
    return products;
  }

  return products.sort((a,b) => {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if(typeof valueA == 'string') {
      return orderDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    } else {
      return orderDirection === 'asc' ? valueA - valueB : valueB - valueA;
    }
  })

  }

}

