import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './products/form.component';

export const routes: Routes = [

  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/form', component: FormComponent},
  {path: 'products/form/:id', component:FormComponent}

];
