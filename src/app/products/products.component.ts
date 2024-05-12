import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import swal from 'sweetalert2';
import { Product } from './product';
import { ProductsService } from './products.service';
import { OrderByPipe } from './order-by.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderByPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  delete(product: Product): void {
    swal
      .fire({
        title: 'Are you sure?',
        text: `Seguro que desea eliminar al cliente ${product.description}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Cancelar',
      })
      .then((result) => {
        if (result.value) {
          this.productService
            .deleteProduct(product.id)
            .subscribe((response) => {
              swal.fire({
                title: 'Eliminado!',
                text: 'El cliente ha sido eliminado.',
                icon: 'success',
              });
              this.products = this.products.filter(
                (clie: Product) => clie !== product
              );
            });
        }
      });
  }
}
