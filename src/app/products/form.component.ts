import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { Product } from './product';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [ProductsService],
})
export class FormComponent implements OnInit {
  product: Product = new Product();
  titulo: string = 'TU MADRE';

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.productsService
          .getProduct(id)
          .subscribe((product) => (this.product = product));
      }
    });
  }

  create(): void {
    this.productsService.createProducts(this.product).subscribe((json) => {
      this.router.navigate(['/products']);
      swal.fire('Nuevo cliente', `Cliente creado con exito!`, 'success');
    });
  }

  update(): void {
    this.productsService.updateProduct(this.product).subscribe((json) => {
      this.router.navigate(['/products']);
      swal.fire(
        'Cliente Actualizado',
        `Product ${json.product.description} actualizado con exito!`,
        'success'
      );
    });
  }
}
