import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

    products: any;

  constructor(private ProductsService: ProductsService){

  }

  ngOnInit() {
      this.ProductsService.getProducts().subscribe(
        products => this.products = products
      );
  }

  delete(product: Product) : void {

  }



}
